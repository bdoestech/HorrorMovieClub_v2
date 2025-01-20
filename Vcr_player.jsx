/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/vcr_player.glb 
Author: twunnyphaiv (https://sketchfab.com/twunnyphaiv)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vcr-player-98951dfd481b432b883b128222ea24ae
Title: VCR Player
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/vcr_player.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Screws} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Buttons} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.JackInner} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/vcr_player.glb')
