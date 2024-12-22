import ContentLoader from "react-content-loader"

interface SkeletonProps {
  width?: string
  height?: string
}

const Skeleton = ({ width = "100%", height = "20px" }: SkeletonProps) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    backgroundColor="#3C3E42"
    foregroundColor="#5A5C61"
  >
    <rect x="0" y="0" rx="5" ry="5" width={`${width}`} height={`${height}`} />
  </ContentLoader>
)

export default Skeleton
