import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const UserCreateDialog = ({ open, onClose }) => {
  const [ninputValue, setNinputValue] = useState("");
  const [linputValue, setLinputValue] = useState("");
  const [einputValue, setEinputValue] = useState("");

  async function NewUser() {


  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Овог</Label>
            <Input id="name" value={ninputValue} onChange={(e) => setNinputValue(e.target.value)} placeholder='Овог'/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="Нэр">Username</Label>
            <Input id="username" value={linputValue} onChange={(e) => setLinputValue(e.target.value)} placeholder='Нэр'/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="И-Мэйл">И-Мэйл</Label>
            <Input id="И-Мэйл" value={einputValue} onChange={(e) => setEinputValue(e.target.value)} placeholder='И-Мэйл'/>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onClose(false)} variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" onClick={NewUser}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
