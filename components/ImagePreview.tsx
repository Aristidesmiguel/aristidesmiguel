import { Dialog, DialogContent } from "@/components/ui/dialog";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export function ImagePreview({ onClose, open }: IProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] border-none bg-[#070b14]">
        <h1>Buscando grandeza, falhamos em fazer o bem.</h1>
        <h3>Agora, é hora de fazer o que é certo.</h3>
      </DialogContent>
    </Dialog>
  );
}
