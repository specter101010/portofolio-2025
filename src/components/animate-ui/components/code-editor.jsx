import * as React from 'react'
import { useInView } from 'motion/react'
import { cn } from '@/lib/utils'
import { CopyButton } from '@/components/animate-ui/buttons/copy'

function CodeEditor({
  children: code,
  lang,
  theme = '#17153B',
  className,
  header = true,
  dots = true,
  icon,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  copyButton = false,
  title,
  onDone,
  onCopy,
  ...props
}) {
  const editorRef = React.useRef(null)
  const [highlightedCode, setHighlightedCode] = React.useState('')
  const [typedCode, setTypedCode] = React.useState('')
  const [isTypingDone, setIsTypingDone] = React.useState(false)

  const inViewResult = useInView(editorRef, {
    once: inViewOnce,
    margin: inViewMargin,
  })
  const isInView = !inView || inViewResult

  // Simulasi delay acak seperti manusia
  const getRandomDelay = () => Math.floor(Math.random() * 20) + 5 // 5-25ms

  const animateTyping = (html) => {
    let index = 0

    const type = () => {
      if (index <= html.length) {
        setTypedCode(html.slice(0, index) + '<span class="blinking-cursor">|</span>')
        index++
        setTimeout(type, getRandomDelay())
      } else {
        setIsTypingDone(true)
        setTypedCode(html) // hapus cursor di akhir
      }
    }

    type()
  }

  React.useEffect(() => {
    if (!code?.length || !isInView) return

    import('shiki').then(({ codeToHtml }) => {
      codeToHtml(code, { lang, theme }).then((highlighted) => {
        setHighlightedCode(highlighted)
        animateTyping(highlighted)
        onDone?.()
      })
    })
  }, [code, lang, theme, isInView, onDone])

  return (
    <div
      data-slot="code-editor"
      className={cn(
        'relative w-[600px] h-[400px] border border-border overflow-hidden flex flex-col rounded-xl',
        className
      )}
      {...props}>
      {header ? (
        <div className="bg-[#17154B] border-b border-border/75 relative flex flex-row items-center justify-between gap-y-2 h-10 px-4">
          {dots && (
            <div className="flex flex-row gap-x-2">
              <div className="size-2 rounded-full bg-red-500"></div>
              <div className="size-2 rounded-full bg-yellow-500"></div>
              <div className="size-2 rounded-full bg-green-500"></div>
            </div>
          )}

          {title && (
            <div className={cn('flex flex-row items-center gap-2', dots &&
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2')}>
              {icon ? (
                <div
                  className="text-muted-foreground [&_svg]:size-3.5"
                  dangerouslySetInnerHTML={
                    typeof icon === 'string' ? { __html: icon } : undefined
                  }>
                  {typeof icon !== 'string' ? icon : null}
                </div>
              ) : null}
              <figcaption className="flex-1 truncate text-white text-[13px]">
                {title}
              </figcaption>
            </div>
          )}

          {copyButton ? (
            <CopyButton
              content={code}
              size="sm"
              variant="ghost"
              className="-me-2 bg-transparent hover:bg-black/5"
              onCopy={onCopy}
            />
          ) : null}
        </div>
      ) : (
        copyButton && (
          <CopyButton
            content={code}
            size="sm"
            variant="ghost"
            className="absolute right-2 top-2 z-[2] backdrop-blur-md bg-transparent hover:bg-black/5"
            onCopy={onCopy}
          />
        )
      )}

      <div
        ref={editorRef}
        className="h-[calc(100%-2.75rem)] w-full text-sm p-4 font-mono relative overflow-auto flex-1">
        <div
          className={cn(
            '[&>pre,_&_code]:!bg-transparent [&>pre,_&_code]:border-none [&_code]:!text-[13px]'
          )}
          dangerouslySetInnerHTML={{ __html: typedCode }}
        />
      </div>

      {/* CSS Cursor */}
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          color: white;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export { CodeEditor }
