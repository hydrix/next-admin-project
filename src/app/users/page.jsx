"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/typography/h3";
import { UsersTable } from "./table";
import { UserCreateDialog } from "./user-create-dialog";
import { useEffect, useState } from "react";

const Users = () => {

  const [createModalOpen, setCreateModalOpen] = useState(false);

  const [data, setData] = useState([]);

  const [limit, setLimit] = useState(10);

  const [fedit, setFedit] = useState('');
  
  const [ledit, setLedit] = useState('');

  const [eedit, setEedit] = useState('');

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  //const handleOnDelete = (id) => {
    //fetch("/api/users/" + id, {
      //method: "DELETE",
    //})
    //.then((res) => res.json())
    //.then((data) => {
      //setData([...data].filter((item) => item.id !== id));
    //});
  //};

  const handleOnDelete = (id) => {
  fetch("/api/users/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      setData(data.filter((item) => item.id !== id)); // Remove the user directly
    });
};

const handleOnEdit = (id) => {
  fetch("/api/users/" + id, {
    method: "PUT",
  }) 
  setCreateModalOpen(true);
}

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <TypographyH3>Хэрэглэгчид</TypographyH3>
            <Button variant="outline" onClick={() => setCreateModalOpen(true)}>
              Шинээр нэмэх
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <UsersTable onDelete = {handleOnDelete} onEdit={handleOnEdit} limit={limit} data={data}/>
          <div className="flex justify-center p-8">
            {data.length > limit && (
              <Button variant="outline" onClick={() => setLimit(limit + 10)} >Load more...</Button>
            )}
      </div>
        </CardContent>
      </Card>
      <UserCreateDialog open={createModalOpen} onClose={setCreateModalOpen} />
    </div>
  );
};

export default Users;