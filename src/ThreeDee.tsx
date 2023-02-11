import {
  Canvas,
  GroupProps,
  ThreeElements,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Environment, ContactShadows } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function Ring(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props}>
      {/* <shapeGeometry args={[getRingShape()]} /> */}

      <torusGeometry args={[1, 0.1, 12, 64]} />
      <meshStandardMaterial color="#F79489" roughness={0.5} metalness={0.9} />
    </mesh>
  );
}

// #F79489

const RingGroup = () => {
  const g = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    g.current.rotation.y += delta * 0.5;
    g.current.position.y = Math.sin(g.current.rotation.y) / 2 + 0.5;
  });

  return (
    <group ref={g}>
      <group rotation={[45, 0, 0]}>
        <mesh position={[-0.89, 1.2, 0]}>
          <dodecahedronGeometry args={[0.2, 0]} />
          <meshPhysicalMaterial
            color="#F79489"
            roughness={0.5}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </mesh>
        <Ring position={[-0.89, 0, 0]} />
      </group>
      <Ring rotation={[-45, 0, 0]} position={[0.89, 0, 0]} />
    </group>
  );
};

const Cake: React.FC<GroupProps> = (props) => {
  const obj = useLoader(OBJLoader, "/cake.obj");
  const geometry = useMemo(() => {
    const g: any[] = [];
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as THREE.Mesh;
        g.push(_c.geometry);
      }
    });
    return g;
  }, [obj]);

  return (
    <group {...props} dispose={null}>
      {geometry.map((g, i) => (
        <mesh key={`cake-${i}`} rotation={[-90, 0, 0]} geometry={g}>
          <meshPhysicalMaterial
            color="transparent"
            roughness={0.5}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={1}
          />
        </mesh>
      ))}
    </group>
  );
};

const Gift: React.FC<GroupProps> = (props) => {
  const obj = useLoader(OBJLoader, "/box.obj");
  const geometry = useMemo(() => {
    const g: any[] = [];
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as THREE.Mesh;
        g.push(_c.geometry);
      }
    });
    return g;
  }, [obj]);

  return (
    <group {...props} dispose={null}>
      {geometry.map((g, i) => (
        <mesh key={`gift-${i}`} rotation={[-90, 0, 0]} geometry={g}>
          <meshPhysicalMaterial
            color="transparent"
            roughness={0.5}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={1}
          />
        </mesh>
      ))}
    </group>
  );
};

const Glass: React.FC<GroupProps> = (props) => {
  const obj = useLoader(OBJLoader, "/glass.obj");
  const geometry = useMemo(() => {
    const g: any[] = [];
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as THREE.Mesh;
        g.push(_c.geometry);
      }
    });
    return g;
  }, [obj]);

  return (
    <group {...props} dispose={null}>
      {geometry.map((g, i) => (
        <mesh key={`glass-${i}`} rotation={[0, 0, 0]} geometry={g}>
          <meshPhysicalMaterial
            color="transparent"
            roughness={0.5}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={1}
          />
        </mesh>
      ))}
    </group>
  );
};

const Flower: React.FC<GroupProps> = (props) => {
  const obj = useLoader(OBJLoader, "/flower.obj");
  const geometry = useMemo(() => {
    const g: any[] = [];
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as THREE.Mesh;
        g.push(_c.geometry);
      }
    });
    return g;
  }, [obj]);

  return (
    <group {...props} dispose={null}>
      {geometry.map((g, i) => (
        <mesh key={`flower-${i}`} rotation={[0, 0, 0]} geometry={g}>
          <meshPhysicalMaterial
            color="transparent"
            roughness={0.5}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={1}
          />
        </mesh>
      ))}
    </group>
  );
};

const ThingGroup = () => {
  const g = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    g.current.rotation.y -= delta * 0.3;
    // g.current.position.y = Math.sin(g.current.rotation.y) / 4 + 0.25;
  });

  return (
    <group rotation={[0.2, 0, 0]} ref={g}>
      <Cake
        rotation={[0, 4.5, 0]}
        scale={0.25}
        position={[4, 1, 4]}
        castShadow={false}
      />
      <Glass
        rotation={[0.5, 0, 0]}
        scale={0.4}
        position={[4, 1, -4]}
        castShadow={false}
      />
      <Gift
        rotation={[0.5, -0.5, 0]}
        scale={0.2}
        position={[-4, 0, 4]}
        castShadow={false}
      />
      <Flower
        rotation={[-1.5, -0.5, 0]}
        scale={0.13}
        position={[-4, -1, -4]}
        castShadow={false}
      />
    </group>
  );
};

export const ThreeDee = () => {
  return (
    <Canvas
      className="canvas"
      camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 5, 10] }}
      style={{ width: "100%", height: "100vh" }}
    >
      <ambientLight />
      <spotLight
        color={"red"}
        distance={100}
        position={[10, 10, 10]}
        angle={1}
        penumbra={1}
        decay={2}
        intensity={10}
        castShadow
      />
      <pointLight position={[10, 10, 10]} />
      <RingGroup />
      <ThingGroup />
      <ContactShadows
        position={[0, -1.1, 0]}
        scale={5}
        far={3}
        blur={2.5}
        rotation={[Math.PI / 2, 0, 0]}
        color={"#4a2521"}
      />

      <Environment preset="warehouse" />
    </Canvas>
  );
};
