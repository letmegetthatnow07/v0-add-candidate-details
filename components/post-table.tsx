"use client"

import { type Post } from "@/lib/posts-data"

interface PostTableProps {
  posts: Post[]
  preferences: (string | null)[]
}

export function PostTable({ posts, preferences }: PostTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-border bg-secondary">
            <th className="px-3 py-2.5 text-left font-semibold text-foreground">
              Post Code
            </th>
            <th className="px-3 py-2.5 text-left font-semibold text-foreground">
              Post Name
            </th>
            <th className="px-3 py-2.5 text-left font-semibold text-foreground">
              {"Name of Ministry/ Department"}
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr
              key={`${post.postCode}-${post.sNo}`}
              className={`border-b border-border ${
                index % 2 === 1 ? "bg-secondary" : "bg-card"
              }`}
            >
              <td className="px-3 py-2.5 font-bold text-primary">
                {post.postCode}
              </td>
              <td className="px-3 py-2.5 text-foreground">{post.postName}</td>
              <td className="px-3 py-2.5 text-foreground">{post.ministry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
