'use client';;
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  useAccordionItem,
} from '@/components/animate-ui/radix/accordion';
import {
  MotionHighlight,
  MotionHighlightItem,
} from '@/components/animate-ui/effects/motion-highlight';

function FileButton({
  children,
  className,
  icons,
  icon,
  open,
  sideComponent,
  ...props
}) {
  return (
    <MotionHighlightItem className="size-full ">
      <div
        data-slot="file-button"
        className={cn(
          'flex items-center truncate gap-2 p-2 h-10 relative z-10 rounded-lg w-full cursor-default',
          className
        )}
        {...props}>
        <span
          className="flex [&_svg]:size-4 [&_svg]:shrink-0 items-center gap-2 shrink-1 truncate ">
          {icon
            ? typeof icon !== 'string'
              ? icon
              : null
            : icons && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={open ? 'open' : 'close'}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{ duration: 0.15 }}>
                    {open
                      ? typeof icons.open !== 'string'
                        ? icons.open
                        : null
                      : typeof icons.close !== 'string'
                        ? icons.close
                        : null}
                  </motion.span>
                </AnimatePresence>
              )}
          <span className="shrink-1 text-sm block truncate break-word">
            {children}
          </span>
        </span>
        {sideComponent}
      </div>
    </MotionHighlightItem>
  );
}

function Files({
  children,
  className,
  activeClassName,
  defaultOpen,
  open,
  onOpenChange,
  ...props
}) {
  return (
    <div
      data-slot="files"
      className={cn(
        'relative size-full rounded-xl border bg-mute overflow-auto',
        className
      )}
      {...props}>
      <MotionHighlight
        controlledItems
        mode="parent"
        hover
        className={cn('bg-[#27273d] rounded-lg pointer-events-none', activeClassName)}>
        <Accordion
          type="multiple"
          className="p-2"
          defaultValue={defaultOpen}
          value={open}
          onValueChange={onOpenChange}>
          {children}
        </Accordion>
      </MotionHighlight>
    </div>
  );
}

function FolderTrigger({
  children,
  className,
  sideComponent,
  ...props
}) {
  const { isOpen } = useAccordionItem();

  return (
    <AccordionTrigger
      data-slot="folder-trigger"
      className="h-auto py-0 hover:no-underline font-normal relative z-10 max-w-full"
      {...props}
      chevron={false}>
      <FileButton
        open={isOpen}
        icons={{ open: <FolderOpenIcon />, close: <FolderIcon /> }}
        className={className}
        sideComponent={sideComponent}>
        {children}
      </FileButton>
    </AccordionTrigger>
  );
}

function Folder({
  children,
  className,
  name,
  open,
  defaultOpen,
  onOpenChange,
  sideComponent,
  ...props
}) {
  return (
    <AccordionItem
      data-slot="folder"
      value={name}
      className="relative border-b-0"
      {...props}>
      <FolderTrigger className={className} sideComponent={sideComponent}>
        {name}
      </FolderTrigger>
      {children && (
        <AccordionContent
          className="relative pb-0 !ml-7 before:absolute before:-left-3 before:inset-y-0 before:w-px before:h-full before:bg-white">
          <Accordion
            type="multiple"
            defaultValue={defaultOpen}
            value={open}
            onValueChange={onOpenChange}>
            {children}
          </Accordion>
        </AccordionContent>
      )}
    </AccordionItem>
  );
}

function File({
  name,
  className,
  sideComponent,
  ...props
}) {
  return (
    <FileButton
      data-slot="file"
      icon={<FileIcon />}
      className={className}
      sideComponent={sideComponent}
      {...props}>
      {name}
    </FileButton>
  );
}

export { Files, Folder, File };
