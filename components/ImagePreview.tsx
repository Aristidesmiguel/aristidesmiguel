import { Dialog, DialogContent } from "@/components/ui/dialog";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export function ImagePreview({ onClose, open }: IProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] border-none bg-[#070b14]">
        <img src="logo.png" alt="Aristides Miguel - Logo" />
      </DialogContent>
    </Dialog>
  );
}
