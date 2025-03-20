"use client"

import { useEffect, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// Blog post data
const blogPosts = [
  {
    id: "spacers",
    title: "Everything you need to know about spacers and what they do!",
    excerpt:
      "Let's first study more about spacers before seeking a spacers supplier provider. In contrast to a specific object, the term spacer is more directly associated with an application.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "October 26, 2023",
    author: "rizwan_119",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Uncategorized",
    content: `
      <p>Let's first study more about spacers before seeking a <strong>spacers supplier</strong> provider. In contrast to a specific object, the term spacer is more directly associated with an application. As spacers, they may make use of shims, washers, gaskets, personalized stampings, and cut-off tubes. In the use of spacers, gaskets serve two purposes. One is to seal the space between the flanges, and the other is to prevent leaks. Additionally utilized as spacers are washers.</p>
      
      <p>An example of a spacer in practice is a washer placed on a bolt. When the bolt is tightened, it helps to prevent the bolt head from distorting the hole and it also helps to stop the bolt head from scratching the material. Shims used as spacers can serve several purposes. Shims that have been hardened are utilized as spacers in gearboxes, transmissions, differentials, speed take-offs, etc. They enable more accurate measurement of tolerance stack-ups. Shims are further employed when attaching pumps and motors as spacers.</p>
      
      <p>For more information about your needs, speak with an MSG now if your application calls for a spacer, shim, washer, or metal stamping.</p>
      
      <h2>What is the role of the spacer?</h2>
      
      <p>A tiny open pipe or cylinder known as a screw spacer is used. A spacer must be inserted between the surface you are pushing into and the bolt or screw head to be used as a spacer. Using a spacer ensures that the bolt or screw cannot be inserted, to put it simply. A spacer is designed with a hollow body that allows the shaft to completely pass through it before entering the surrounding material. As the fastener is precisely torqued, it creates a space between the screw crown and the component or substance below.</p>
      
      <p>Spacers can aid in accurately positioning screws and bolts in addition to creating a clearance hole. The majority of spacers have a smooth inside and will spin freely unless a screw is tightened to fix them. The majority of spacers are composed of metal, however, for intricate work, you might need to use different materials. Nylon, for instance, is frequently used for spacers that need to be non-conductive. They may be described as screw insulators that pivot according to their intended use.</p>
      
      <p>A common standard for building gears, circuit boards, doors, panels, and other electrical components is the use of spacers. The usage of spacers in computing is one of the most common. However, mounting hardware is just one application where spacers suppliers are frequently employed. They assist in precisely placing screws and bolts, providing enough spaces for cabling and ventilation. Some bolt spacers also help to increase the strength of failsafe screw-in couplings. So, if you work in a sector that needs spacers and are seeking a provider of spacers and gaskets, get in touch with MSG. We go above and above to serve our customers, ensuring that their needs are met in the allocated time.</p>
    `,
    tags: ["spacers", "industrial", "manufacturing"],
    relatedPosts: ["duplex-steel-pipe-fittings", "3d-bends"],
  },
  {
    id: "duplex-steel-pipe-fittings",
    title: "Benefits of duplex steel pipe fittings!",
    excerpt:
      "Looking for a duplex fittings supplier in UAE, look no further than MSG Dubai. We are a leading company that provides products like bends, pipe fittings, flanges, spacers, and more.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "October 26, 2023",
    author: "rizwan_119",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Uncategorized",
    content: `
      <p>Looking for a <strong>duplex fittings supplier</strong> in UAE, look no further than MSG Dubai. We are a leading company that provides products like bends, pipe fittings, flanges, spacers, and more. In this blog, we will explain to you the benefits of using duplex pipe fittings. So keep reading the blog until the end.</p>
      
      <p>A junction is a piece of equipment that frequently is a part of the pipe system. It may be a removable attachment that may be placed and removed as required. It may be permanent or temporary. The primary purpose of pipe fittings is to seal off the pipeline to stop leaks.</p>
      
      <h2>The parts of duplex steel pipe fittings are what?</h2>
      
      <p>The body, the olive, and the nut are the three components that make up a pipe fitting. To produce a full-proof seal, the olive must be compressed against the pipe when the nut is tightened around it. This gasket prevents any extra material from leaving the system. The fitting must stay in place thanks to the nut and the olive.</p>
      
      <h2>Which areas have the most need for pipe fittings?</h2>
      
      <p>The chemical, oil, gas, and petroleum industries are the main businesses that profited from pipe fittings. These fittings prevent potentially harmful situations by preventing the chemical from pouring out of the pipes.</p>
      
      <h2>Let's quickly review the advantages that Duplex Steel Pipe Fittings provide:</h2>
      
      <ol>
        <li><strong>Easy connection:</strong> Pipe fittings are easy to install and remove the need for difficult soldering and welding procedures. The fittings are easily installed by hand without the use of additional tools.</li>
        <li><strong>Easy Assembly:</strong> Create a Duplex steel pipe fitting by simply slipping the pipe through the olive and tightening it following the pipe's radius and requirements. Pipe fittings are easy to detach in an emergency. DIY is an easy substitute for paying a specialist.</li>
        <li><strong>No Complex Tools:</strong> Pipe fitting installation just needs a proper manual and an adjustable spanner. There is no need for expensive machining machinery.</li>
        <li><strong>Easy to Demount:</strong> It is straightforward to unhinge the connection and slide the fitting's body out of the pipe when dismantling is necessary. The structural integrity of the pipes may be swiftly and safely removed without affecting pipe fittings.</li>
        <li><strong>Compatibility:</strong> If copper pipes are utilized, copper tubing and fittings are not necessary. Several different types of pipes can be utilized with a copper fitting. PVC and plastic pipes can also be used with pipe fittings if they are installed appropriately.</li>
      </ol>
      
      <p>So now that you have learned the main advantages of using duplex pipe fittings, you must be looking thinking of duplex fittings and <strong>duplex flanges supplier</strong>. You won't need to go further since MSG offers a comprehensive portfolio of pipe fittings and duplexes to practically every sector. Every product is treated with the utmost care on both arrival and departure thanks to our stringent quality checks. We regularly do further testing as the top <strong>forging supplier</strong> in Dubai to make sure that each product conforms to the specifications.</p>
    `,
    tags: ["duplex steel", "pipe fittings", "industrial"],
    relatedPosts: ["spacers", "stainless-steel-pipe-fittings"],
  },
  {
    id: "3d-bends",
    title: "Applications where 3D bends are used",
    excerpt:
      "Looking for a 3D bends supplier in UAE, look no further than MSG Dubai. We are a leading company that provides products like bends, pipe fittings, flanges, spacers, and more.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "October 26, 2023",
    author: "rizwan_119",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Uncategorized",
    content: `
      <p>Looking for a <strong>3D bends supplier</strong> in UAE, look no further than MSG Dubai. We are a leading company that provides products like bends, pipe fittings, flanges, spacers, and more. In this blog, we will explain to you the different applications of 3D bends. So keep reading the blog until the end.</p>
      
      <h2>What are 3D bends and what are some uses of them?</h2>
      
      <p>A bend where the radius is determined by multiplying the pipe's diameter by the curve's radius. Compared to a 5D bend, which looks like a smooth arc between two perpendicular pieces, it is a sharper bend. It is more seamless than a 1.5D bend, which mimics a typical 90° right angle almost exactly.</p>
      
      <h2>Here are some examples of situations where 3D bends are often used:</h2>
      
      <ol>
        <li><strong>Automotive exhaust system:</strong> Whether factory-installed or custom-made, exhaust systems on cars and trucks usually include several bends to get around various obstructions underneath the vehicle, including the engine, gearbox, cross-members, and the frame.</li>
        <li><strong>Automotive roll cages:</strong> Off-roading may be a very costly hobby or a fiercely competitive sport. One of the many dangers associated with rock climbing, mudding, or otherwise pushing a vehicle past its breaking limit is rolling it over. A top-notch roll cage is the bare minimum needed for safeguarding the automobile and its occupants.</li>
        <li><strong>Structural frames:</strong> There are often 3D bends in structural frameworks of all kinds. These can be the frames of custom cars, frames of structures, or even frames of planes or spacecraft. After the pipe has been bent, cut, and welded together to make a powerful skeleton, sheet metal is typically attached using screws or welds to produce a final product that is both exceedingly durable and waterproof.</li>
        <li><strong>Furniture:</strong> For both structural and aesthetically pleasing reasons, a range of furniture types incorporate 3D bends and tubular steel. Where the legs of the tabletop meet the ground, tables typically feature bends. Similar bends are widely employed to produce a lovely, gentle curve that is both visually pleasing and physically robust in metal chairs, couches, and futons with tubular frames.</li>
        <li><strong>Fencing:</strong> The 3D bend is also quite popular in fencing for both decorative and structural reasons. It is widely employed in galvanized chain-link fencing, particularly to give gates and other decorative items a gentle curve. The custom fence also makes use of it. To accommodate household pets, cattle, horses, and other animals, the plumber usually included decorative embellishments that necessitated certain bends in the fence.</li>
        <li><strong>Pipelines:</strong> Gas and oil pipelines commonly have 3D bends at various locations along their lengths, just like any plumbing system does. They are occasionally substantially larger than standard home pipes and need sophisticated tools to execute custom bends. Gentle bends reduce wear and tear on the pipes and the probability of leaks by making it easier for high-viscosity oil to travel through the pipes and by enhancing the flow of natural gas.</li>
      </ol>
      
      <p>In other cases, even though your project calls for 3D bends, you simply cannot afford to buy the tools necessary to produce them. The equipment may be prohibitively expensive, and intensive training and practice are required to use it efficiently. The good news is that companies like MSG can custom-bend pipe to your exact specifications, saving you money and the hassle of having to buy your equipment.</p>
      
      <p>We are a leading 3D and <strong>5D Bends Supplier</strong> in Dubai. In addition to this, we also supply other products like <strong>corrosion monitoring device</strong>, valves, spacers, flanges, and more.</p>
    `,
    tags: ["3D bends", "industrial applications", "manufacturing"],
    relatedPosts: ["spacers", "duplex-steel-pipe-fittings"],
  },
  {
    id: "stainless-steel-pipe-fittings",
    title: "Benefits of using stainless steel pipe fittings!",
    excerpt:
      "Benefits of using stainless steel pipe fittings! In pipe systems, fittings are used to join straight pipe or tube segments, adapt to various sizes or forms, and serve additional functions.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "October 26, 2023",
    author: "rizwan_119",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Uncategorized",
    content: `
      <p>Benefits of using stainless steel pipe fittings!</p>
      
      <p>In pipe systems, fittings are used to join straight pipe or tube segments, adapt to various sizes or forms, and serve additional functions, such as controlling fluid flow. To ensure that your <strong>pipe fittings in Dubai</strong> are the perfect fit for your unique purpose, it's important to consider a few variables, most importantly size and form. However, the material used to make the pipe fitters is another important aspect to take into account. Chromium-nickel-iron alloys and chromium, two additives, will have a significant impact on the steel's strength and look.</p>
      
      <p>If you are looking for a <strong>pipes fitting</strong> supplier in Dubai, have a look at the benefits of utilizing steel pipe fittings first so that you won't have any concerns about the material's long-term durability and functionality.</p>
      
      <ol>
        <li><strong>Highly durable:</strong> Due to its durability and strength, stainless steel is one of the most often used grades for pipe fittings and has long been employed in the manufacture of pipes and pipe fittings. The most popular grades, however, are pipe fittings made of stainless steel 304 and 316. The addition gives stainless steel 304 pipe fittings the ability to become significantly stronger. The more Chromium, Nickel, and Iron alloys are added to the steel, the stronger it gets, making it one of the strongest types of steel. Making a surface more resilient by adding a coating of chromium is another technique to boost strength. Pipe fittings with chrome plating are not only robust but also prevent corrosion and may make cleaning much simpler.</li>
        <li><strong>Variety:</strong> Steel can withstand heat treatment, so it's simple to get stainless steel pipe fittings with just the right amount of carbon for any purpose. Because of its reduced cost and widespread use, ferritin stainless steel is frequently employed when a project requires an excessive amount of steel. Due to its resistance to erosion, austenitic stainless steel is frequently utilized in the automobile sector. Martensitic stainless steel is used to make wires and springs because of its strength. However, after it contains 1.0 percent carbon, it is only employed for certain, non-industrial purposes.</li>
        <li><strong>Multipurpose:</strong> Stainless steel 316 pipe fittings are frequently used in the home as well as in industrial settings including shipbuilding, electricity generation, and the construction of commercial buildings. They are utilized in pipelines conveying water, viscous fluids, oil, or steam, as well as fire sprinkler systems. The inclusion of stainless steel makes stainless pipe fittings substantially more rust-resistant. Once more, chrome-plated pipe fittings will aid in the prevention of rust and maintain the appearance of freshly polished steel. Chrome plating is utilized more frequently in the automotive sector because it has a naturally brilliant appearance.</li>
      </ol>
      
      <p>You must be wondering where to acquire high-quality pipe fittings now that you are aware of the primary benefits of utilizing steel pipe fittings. You won't need to go further because MSG offers a full range of pipe fittings to practically every industry, so don't worry. Our rigorous quality inspections ensure that every product, both arriving and exiting, is handled with the utmost care. As the top <strong>pipe suppliers</strong> in Dubai, we constantly do further testing to ensure that every product complies with the specified Standards for both our client and ourselves.</p>
    `,
    tags: ["stainless steel", "pipe fittings", "industrial"],
    relatedPosts: ["duplex-steel-pipe-fittings", "spacers"],
  },
]

// Related post card component
const RelatedPostCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
  >
    <Link href={`/blogs/${post.id}`}>
      <div className="relative h-40 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">{post.title}</h3>
        <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
          <Calendar className="h-3 w-3" />
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  </motion.div>
)

// Social share button component
const SocialShareButton = ({ icon, color, label, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center space-x-2 rounded-full px-4 py-2 text-white ${color}`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </motion.button>
)

export default function BlogPostPage() {
  const router = useRouter()
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isBookmarked, setIsBookmarked] = useState(false)

  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  // Find the current post and related posts
  useEffect(() => {
    if (slug) {
      const currentPost = blogPosts.find((p) => p.id === slug)
      if (currentPost) {
        setPost(currentPost)

        // Get related posts
        if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
          const related = blogPosts.filter((p) => currentPost.relatedPosts.includes(p.id))
          setRelatedPosts(related)
        }
      } else {
        router.push("/blogs")
      }
    }
  }, [slug, router])

  // Handle social sharing
  const handleShare = (platform) => {
    const url = window.location.href
    const title = post?.title || "MSG Blog Post"

    let shareUrl

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`
        break
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied to clipboard",
          description: "You can now share this article with others.",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer")
    }
  }

  // Toggle bookmark
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)

    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked
        ? "This article has been removed from your bookmarks."
        : "This article has been saved to your bookmarks.",
    })
  }

  if (!post) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-4 text-4xl">🔍</div>
          <h1 className="mb-2 text-2xl font-bold">Loading article...</h1>
          <p className="text-gray-600 dark:text-gray-400">Please wait while we fetch the article.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      {/* Hero section with parallax effect */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden sm:h-[60vh]">
        <motion.div style={{ opacity, y, scale }} className="absolute inset-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </motion.div>

        <div className="container relative z-10 mx-auto flex h-full items-end px-4 pb-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex flex-wrap items-center gap-4 text-white"
            >
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="rounded-full bg-primary/80 px-3 py-1 text-xs font-medium">{post.category}</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-200 sm:text-xl"
            >
              {post.excerpt}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: -5 }}
              onClick={() => router.push("/blogs")}
              className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all articles</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2"
            >
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleBookmark}
                className={`flex h-8 w-8 items-center justify-center rounded-full ${isBookmarked
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}
              >
                <Bookmark className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleShare("copy")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                <Share2 className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>

          <div className="mb-8 flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-primary">
              <AvatarImage src={post.authorImage} alt={post.author} />
              <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Published on {post.date}</div>
            </div>
          </div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12">
            <Separator className="mb-8" />

            <div className="mb-8 flex items-center space-x-4">
              {post.tags.map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>


            <div className="mb-12">
              <h3 className="mb-4 text-xl font-bold">Share this article</h3>
              <div className="flex flex-wrap gap-2">
                <SocialShareButton
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  }
                  color="bg-[#1DA1F2]"
                  label="Twitter"
                  onClick={() => handleShare("twitter")}
                />
                <SocialShareButton
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  }
                  color="bg-[#1877F2]"
                  label="Facebook"
                  onClick={() => handleShare("facebook")}
                />
                <SocialShareButton
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  }
                  color="bg-[#0A66C2]"
                  label="LinkedIn"
                  onClick={() => handleShare("linkedin")}
                />
                <SocialShareButton
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  }
                  color="bg-[#25D366]"
                  label="WhatsApp"
                  onClick={() => handleShare("whatsapp")}
                />
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div>
                <h3 className="mb-6 text-2xl font-bold">Related Articles</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {relatedPosts.map((relatedPost, index) => (
                    <RelatedPostCard key={relatedPost.id} post={relatedPost} index={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}