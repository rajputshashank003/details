import { Environment } from "@react-three/drei"
import { PlaneCar } from "../../public/RedCar"
import { Canvas } from "@react-three/fiber"

const RedCarModel = () => {
  return (
    <Canvas camera={{ position: [40.81179373106988,19.674589892349776,43.969398506466185], fov: 50 }}
        gl={{ antialias: true, alpha: true, pixelRatio: Math.min(window.devicePixelRatio, 2) }}
        style={{ background: 'transparent', pointerEvents : "none" , width : "100%" }}
    >
        <ambientLight intensity={2} />
        <Environment preset="park" />
        <PlaneCar scale={0.16} />
        <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
        <directionalLight position={[0, 150 , 10]} intensity={2} castShadow />
    </Canvas>
  )
}

export default RedCarModel