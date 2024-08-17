import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

const dashboard = () => {
  return (
    <div className="h-full max-w-7xl mx-auto">
        <h2 className="text-3xl p-5 bg0gray-100 font-extralight text-cyan-600">
            My Documents
        </h2>
        <Documents />
    </div>
  )
}

export default dashboard