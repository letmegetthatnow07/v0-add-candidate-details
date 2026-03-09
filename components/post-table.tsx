"use client"

import { type Post } from "@/lib/posts-data"

interface PostTableProps {
  posts: Post[]
  preferences: (number | null)[]
}

export function PostTable({ posts, preferences }: PostTableProps) {
  const getPreferenceForPost = (sNo: number): number | null => {
    const idx = preferences.indexOf(sNo)
    return idx !== -1 ? idx + 1 : null
  }

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
            <th className="w-16 px-3 py-2.5 text-center font-semibold text-foreground">
              Pref.
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            const pref = getPreferenceForPost(post.sNo)
            const isSelected = pref !== null
            return (
              <tr
                key={`${post.postCode}-${post.sNo}`}
                className={`border-b border-border ${
                  isSelected ? "bg-accent" : index % 2 === 1 ? "bg-secondary" : "bg-card"
                }`}
              >
                <td className="px-3 py-2.5 font-bold text-primary">
                  {post.postCode}
                </td>
                <td className="px-3 py-2.5 text-foreground">{post.postName}</td>
                <td className="px-3 py-2.5 text-foreground">{post.ministry}</td>
                <td className="px-3 py-2.5 text-center">
                  {pref !== null ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {pref}
                    </span>
                  ) : null}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
