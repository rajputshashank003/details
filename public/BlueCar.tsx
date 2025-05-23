/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 blueCar.glb -t 
Author: tedpermana (https://sketchfab.com/tedpermana)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-car-chrysler-saratoga-1960-3fa89e6bf78b49aab111af4195efb6fe
Title: Low Poly Car - Chrysler Saratoga 1960
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
  }
  materials: {
    Tire: THREE.MeshStandardMaterial
    Body: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
  animations: any
}

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/blueCar.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Tire} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Body} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/blueCar.glb')
