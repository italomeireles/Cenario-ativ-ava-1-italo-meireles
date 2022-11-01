import { PerspectiveCamera } from "three"

const VERTICAL_FIELD_OF_VIEW = 80
const NEAR = 2
const FAR = 160

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

export const camera = new PerspectiveCamera(
  VERTICAL_FIELD_OF_VIEW,
  sizes.width / sizes.height,
  NEAR,
  FAR
)

camera.position.set(0, 8, 10)

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
})

export default camera
