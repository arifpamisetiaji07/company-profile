import ContentfulClient from "@/contentful/contentfulClient"
import { IAsset, TypeAboutUsContentSkeleton } from "@/contentful/types/blog.types"
import RichText from "../RichText"
import Image from "next/image"



const getAboutUs = async () => {
    try {
        const data = await ContentfulClient.getEntries<TypeAboutUsContentSkeleton>({
            content_type: "aboutUsContent"
        })

        return data.items
    } catch (error) {
        console.log(error)
    }
}

export default async function HistoryCompany() {
    const content = await getAboutUs()
    return(
        <div>
            {content && 
                content?.map((content, idx) => (
                    <section key={idx}>
<div className="flex flex-wrap lg:items-center p-12">
    <div className="lg:w-1/2">
    <Image
                                src={`https:${(content.fields.image as IAsset).fields.file.url}`}
                                alt="Company History"
                                className="w-full max-w-4xl rounded-md shadow-lg"
                                width={90}
                                height={50}
                            />
    </div>
    <div className="lg:w-1/2">
        <h2 className="lg:ml-12 lg:text-3xl font-bold mt-5 mb-5 ">{content.fields?.title}</h2>
        <div className="lg:ml-12 mb-5 lg:text-xl">
                    <RichText
                        document={content.fields.body}
                    />
        </div>
        <button className="lg:ml-12 px-2 py-1 bg-red-500 text-sm lg:px-4 lg:py-2 lg:text-xl text-white hover:bg-green-600">Learn More <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
    </div>
</div>
</section>
                ))
            }
        </div>
    )
}