
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const UserCreateDialog = ({ open, onClose }) => {
  const [ninputValue, setNinputValue] = useState('');
  const [linputValue, setLinputValue] = useState('');
  const [einputValue, setEinputValue] = useState('');
  function NewUser() {
    fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify({
    id: "7ae057de-0565-42c2-ae21-bd626f57c988",
    firstname: {setNinputValue},
    lastname: {setLinputValue},
    email: {setEinputValue},
    imageUrl: "http://dummyimage.com/117x116.png/cc0000/ffffff"
    }),
  });
  } 
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Овог</Label>
            <Input id="name" value={ninputValue} onChange={(event) => setNinputValue(event.target.value)} placeholder='Овог'/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="Нэр">Username</Label>
            <Input id="username" value={linputValue} onChange={(event) => setLinputValue(event.target.value)} placeholder='Нэр'/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="И-Мэйл">И-Мэйл</Label>
            <Input id="И-Мэйл" value={einputValue} onChange={(event) => setEinputValue(event.target.value)} placeholder='И-Мэйл'/>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onClose(false)} variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" onClick = {NewUser}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
