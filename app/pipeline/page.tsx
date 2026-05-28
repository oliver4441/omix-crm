"use client"

import { useEffect, useState } from "react"
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd"

import { supabase } from "@/lib/supabase"

const stages = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Won",
  "Lost",
]

export default function PipelinePage() {
  const [columns, setColumns] =
    useState<any>({})

  const fetchLeads = async () => {
    const { data, error } =
      await supabase
        .from("leads")
        .select("*")

    if (error) {
      console.error(error)
      return
    }

    const grouped: any = {}

    stages.forEach((stage) => {
      grouped[stage] = []
    })

    data.forEach((lead) => {
      const status =
        lead.status || "New"

      if (!grouped[status]) {
        grouped[status] = []
      }

      grouped[status].push(lead)
    })

    setColumns(grouped)
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const onDragEnd = async (
    result: any
  ) => {
    const { source, destination } =
      result

    if (!destination) return

    const sourceColumn =
      columns[source.droppableId]

    const destColumn =
      columns[destination.droppableId]

    const sourceItems = [
      ...sourceColumn,
    ]

    const destItems = [...destColumn]

    const [removed] =
      sourceItems.splice(
        source.index,
        1
      )

    removed.status =
      destination.droppableId

    destItems.splice(
      destination.index,
      0,
      removed
    )

    setColumns({
      ...columns,
      [source.droppableId]:
        sourceItems,
      [destination.droppableId]:
        destItems,
    })

    await supabase
      .from("leads")
      .update({
        status:
          destination.droppableId,
      })
      .eq("id", removed.id)
  }

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Sales Pipeline
        </h1>
      </div>

      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {stages.map((stage) => (
            <Droppable
              droppableId={stage}
              key={stage}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">
                      {stage}
                    </h2>

                    <span className="rounded-full bg-white/10 px-2 py-1 text-xs">
                      {
                        columns[stage]
                          ?.length
                      }
                    </span>
                  </div>

                  <div className="space-y-3">
                    {columns[
                      stage
                    ]?.map(
                      (
                        lead: any,
                        index: number
                      ) => (
                        <Draggable
                          draggableId={String(
                            lead.id
                          )}
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
                              className="rounded-xl border border-white/10 bg-zinc-900 p-4 transition hover:border-orange-500"
                            >
                              <h3 className="font-medium">
                                {
                                  lead.name
                                }
                              </h3>

                              <p className="mt-1 text-sm text-zinc-400">
                                {
                                  lead.company
                                }
                              </p>

                              <p className="mt-3 text-xs text-zinc-500">
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
