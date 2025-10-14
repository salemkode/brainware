"use client"
import { useState } from "react"
import { Button, Card, Input, Text } from "./retroui"
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const InputName = () => {
    const [name, setName] = useState("");
    const setNameMutation = useMutation(api.names.setName)
    const names = useQuery(api.names.getNames)
    const isEnabled = useQuery(api.names.isEnabled)

    if (!isEnabled) return;
    return <section className="container max-w-6xl mx-auto p-4 my-24 rounded-2xl px-4">
        <Card className="container max-w-6xl mb-8 block mx-auto px-3 py-2">
            <Text>سجل اسمك ك زائر</Text>
            <Input className="my-4" type="text" placeholder="الاسم" onChange={e => setName(() => String(e.target.value))} name="" id="" />
            <Button onClick={() => setNameMutation({ name })}>سجل</Button>
        </Card>
        <Card className="container max-w-6xl mb-8 block mx-auto px-3 py-2">
            <Text>الاسماء المسجله</Text>
            {names?.map(({ body, _id, _creationTime }) => <div key={_id} className="flex justify-between px-2 border my-2">
                <Text>{body}</Text>
                <Text>{new Date(_creationTime).toLocaleTimeString()}</Text>
            </div>)}
        </Card>
    </section>
}