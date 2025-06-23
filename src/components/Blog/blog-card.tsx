// import Image from "next/image"
// import Link from "next/link"
// import { Calendar, Clock } from "lucide-react"
// import type { BlogPost } from "@/lib/types"

// interface BlogCardProps {
//   post: BlogPost
// }

// export default function BlogCard({ post }: BlogCardProps) {
//   return (
//     <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       {/* Featured Image */}
//       <div className="relative h-48 w-full">
//         <Image
//           src={post.image || `/placeholder.svg?height=200&width=400`}
//           alt={post.title}
//           fill
//           className="object-cover"
//         />
//         {post.category && (
//           <div className="absolute top-4 left-4">
//             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//               {post.category}
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         {/* Meta Information */}
//         <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
//           <div className="flex items-center">
//             <Calendar className="h-4 w-4 mr-1" />
//             <time dateTime={post.publishedAt}>
//               {new Date(post.publishedAt).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </time>
//           </div>
//           <div className="flex items-center">
//             <Clock className="h-4 w-4 mr-1" />
//             <span>{post.readTime} min read</span>
//           </div>
//         </div>

//         {/* Title */}
//         <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
//           <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors duration-200">
//             {post.title}
//           </Link>
//         </h2>

//         {/* Excerpt */}
//         <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

//         {/* Author */}
//         <div className="flex items-center">
//           <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
//             <Image
//               src={post.author.avatar || `/placeholder.svg?height=32&width=32`}
//               alt={post.author.name}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="text-sm">
//             <p className="text-gray-900 font-medium">{post.author.name}</p>
//             <p className="text-gray-500">{post.author.role}</p>
//           </div>
//         </div>
//       </div>

//       {/* Tags */}
//       {post.tags && post.tags.length > 0 && (
//         <div className="px-6 pb-4">
//           <div className="flex flex-wrap gap-2">
//             {post.tags.slice(0, 3).map((tag) => (
//               <span
//                 key={tag}
//                 className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
//               >
//                 #{tag}
//               </span>
//             ))}
//             {post.tags.length > 3 && (
//               <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
//                 +{post.tags.length - 3} more
//               </span>
//             )}
//           </div>
//         </div>
//       )}
//     </article>
//   )
// }
