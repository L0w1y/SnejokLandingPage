import { AvatarImage, AvatarFallback, Avatar } from "@/app/components/ui/avatar"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Home() {
  return (
    <div key="1" className="flex flex-col items-center gap-6 p-6 sm:p-8 md:p-10">
      <div className="flex items-center gap-6">
        <Avatar className="h-20 w-20">
          <AvatarImage alt="@freelancer" src="/resources/placeholder-avatar.jpg" />
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">Snejok</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Furry artist</Badge>
            <Badge variant="outline">3D avatars</Badge>
            <Badge variant="outline">Musician</Badge>
            <Badge variant="outline">Streamer</Badge>
          </div>
        </div>
      </div>
      <div className="grid gap-4 text-sm leading-relaxed">
        <p>
          Hello there! I&apos;m SnejOk, a passionate furry artist with a knack for crafting mesmerizing 3D avatars and captivating artworks. Through my vibrant and whimsical creations, I strive to bring joy, spark imagination, and capture the unique essence of characters. With. meticulous attention to detail, Laim to create pieces that evoke a sense of liveliness and leave a lasting impression. Join me on this exciting journey as we explore the boundless possibilities of furry art and. celebrate the beauty of individuality together!
        </p>
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Portfolio</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Image
              alt="Portfolio item"
              className="aspect-[4/3] rounded-lg object-cover"
              height={150}
              src="/placeholder.svg"
              width={200}
            />
            <Image
              alt="Portfolio item"
              className="aspect-[4/3] rounded-lg object-cover"
              height={150}
              src="/resources/placeholder.svg"
              width={200}
            />
            <Image
              alt="Portfolio item"
              className="aspect-[4/3] rounded-lg object-cover"
              height={150}
              src="/resources/placeholder.svg"
              width={200}
            />
            <Image
              alt="Portfolio item"
              className="aspect-[4/3] rounded-lg object-cover"
              height={150}
              src="/resources/placeholder.svg"
              width={200}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Donate</h2>
          <div className="grid gap-2">
            <p>
              If you&apos;ve enjoyed my work and would like to support my creative endeavors, you can donate via the
              following methods:
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button size="sm" variant="outline">
                <CreditCardIcon className="mr-2 h-4 w-4" />
                Donation allerts
              </Button>
              <Button size="sm" variant="outline">
                <BitcoinIcon className="mr-2 h-4 w-4" />
                Crypto
              </Button>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">My socials</h2>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>about.snejok@io.com</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>+7-***-***-42-12</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Link className="underline" href="#">
                snejok.online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BitcoinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function CreditCardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}