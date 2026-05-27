"use client"

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd"

import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabase"

import { toast } from "sonner"

type Lead = {
  id: string
  name: string
  email: string
  status: string
}

const columns = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Won",
]

export default function PipelinePage() {
  const [leads, setLeads] =
    useState<Lead[]>([])

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .eq("user_id", user.id)

    if (error) {
      toast.error(error.message)
      return
    }

    if (data) {
      setLeads(data)
    }
  }

  const onDragEnd = async (
    result: any
  ) => {
    if (!result.destination) return

    const leadId =
      result.draggableId

    const newStatus =
      result.destination.droppableId

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              status: newStatus,
            }
          : lead
      )
    )

    const { error } =
      await supabase
        .from("leads")
        .update({
          status: newStatus,
        })
        .eq("id", leadId)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success(
      "Pipeline updated"
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Sales Pipeline
        </h1>

        <p className="mt-2 text-zinc-400">
          Drag and manage leads visually.
        </p>
      </div>

      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div className="grid gap-6 md:grid-cols-5">
          {columns.map((column) => (
            <Droppable
              droppableId={column}
              key={column}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 min-h-[500px]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-bold text-lg">
                      {column}
                    </h2>

                    <div className="rounded-full bg-black/30 px-3 py-1 text-sm">
                      {
                        leads.filter(
                          (lead) =>
                            lead.status ===
                            column
                        ).length
                      }
                    </div>
                  </div>

                  <div className="space-y-4">
                    {leads
                      .filter(
                        (lead) =>
                          lead.status ===
                          column
                      )
                      .map(
                        (
                          lead,
                          index
                        ) => (
                          <Draggable
                            draggableId={
                              lead.id
                            }
                            index={index}
                            key={lead.id}
                          >
                            {(
                              provided
                            ) => (
                              <div
                                ref={
                                  provided.innerRef
                                }
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="rounded-xl border border-white/10 bg-black/30 p-4 cursor-grab active:cursor-grabbing"
                              >
                                <h3 className="font-semibold">
                                  {
                                    lead.name
                                  }
                                </h3>

                                <p className="mt-2 text-sm text-zinc-400">
                                  {
                                    lead.email
                                  }
                                </p>
                              </div>
                            )}
                          </Draggable>
                        )
                      )}

                    {
                      provided.placeholder
                    }
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}
