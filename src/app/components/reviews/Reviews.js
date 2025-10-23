'use client'
import Image from 'next/image'

const ReviewCard = ({ name, review, avatar }) => (
  <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
    <Image
      src={avatar}
      alt={`${name}'s profile`}
      width={64}
      height={64}
      className="mb-4 rounded-full object-cover"
    />
    <h3 className="text-lg font-semibold text-gray-800 md:text-xl lg:text-2xl">
      {name}
    </h3>
    <p className="mt-2 text-sm text-gray-600 md:text-base lg:text-lg">
      {review}
    </p>
  </div>
)

const ReviewsSection = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ReviewCard
          name="Etty Fidele"
          review="Amazing service! The team was professional and delivered beyond expectations."
          avatar="/stock-photo/etty-fidele-UBJsHb3HLv8-unsplash.jpg"
        />
        <ReviewCard
          name="Joseph Gonzalez"
          review="A fantastic experience from start to finish. Highly recommend!"
          avatar="/stock-photo/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
        />
        <ReviewCard
          name="Taylor Smith"
          review="Top-notch quality and great customer support. Will use again!"
          avatar="/stock-photo/taylor-8Vt2haq8NSQ-unsplash.jpg"
        />
      </div>
    </div>
  </section>
)

export default ReviewsSection
