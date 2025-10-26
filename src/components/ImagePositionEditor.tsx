import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface ImagePositionEditorProps {
  imageSrc: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (position: { x: number; y: number }) => void;
  initialPosition?: { x: number; y: number };
}

export function ImagePositionEditor({
  imageSrc,
  isOpen,
  onClose,
  onSave,
  initialPosition = { x: 50, y: 25 },
}: ImagePositionEditorProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition, isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const moveX = (deltaX / containerWidth) * 100;
    const moveY = (deltaY / containerHeight) * 100;

    setPosition((prev) => ({
      x: Math.max(0, Math.min(100, prev.x - moveX)),
      y: Math.max(0, Math.min(100, prev.y - moveY)),
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSave = () => {
    onSave(position);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adjust Image Position</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Drag the image to position it within the circular frame
          </p>
          <div
            ref={containerRef}
            className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-2 border-primary cursor-move select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={imageSrc}
              alt="Position editor"
              className="absolute w-full h-full object-cover pointer-events-none"
              style={{
                objectPosition: `${position.x}% ${position.y}%`,
              }}
              draggable={false}
            />
          </div>
        </div>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Position</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
