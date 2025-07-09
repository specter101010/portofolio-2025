import React from 'react';

export function ProjectCard() {
  return (
    <div className="w-80 rounded-xl border bg-background p-4 shadow-md">
      <div className="flex flex-col items-center gap-4">
        <img
          className="size-16 rounded-full border object-cover"
          src="https://pbs.twimg.com/profile_images/1904970066770214912/lYBctz26_400x400.jpg"
          alt="Animate UI"
        />

        <div className="text-center">
          <div className="font-bold text-lg">Animate UI</div>
          <div className="text-sm text-muted-foreground">@animate_ui</div>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          A fully animated, open-source component distribution built with React,
          Tailwind CSS, and Motion.
        </p>

        <div className="flex justify-center gap-6">
          <div className="text-center">
            <div className="font-bold text-sm">0</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-sm">2,900</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
