'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // CORREÇÃO 1: Adicionado o valor inicial (0) para o useRef
    const animationRef = useRef<number>(0);

    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Limpeza de canvas antigos
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const SEPARATION = 100;
        const AMOUNTX = 50;
        const AMOUNTY = 50;

        // 1. Setup Básico
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x0a0a0a, 2000, 10000);

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        camera.position.z = 1000;
        camera.position.y = 300;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        container.appendChild(renderer.domElement);

        sceneRef.current = scene;
        rendererRef.current = renderer;

        // 2. Criação das Partículas
        const numParticles = AMOUNTX * AMOUNTY;
        const positions = new Float32Array(numParticles * 3);

        // CORREÇÃO 2: Removida a variável 'colors' que não estava sendo usada

        // Preenche posições iniciais
        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                // X
                positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                // Y (Começa flat)
                positions[i + 1] = 0;
                // Z
                positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
                i += 3;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: 4,
            color: 0x888888,
            transparent: true,
            opacity: 0.6,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // 3. Loop de Animação
        let count = 0;

        const animate = () => {
            const positions = particles.geometry.attributes.position.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {

                    positions[i + 1] =
                        (Math.sin((ix + count) * 0.3) * 50) +
                        (Math.sin((iy + count) * 0.5) * 50);

                    i += 3;
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;

            camera.position.x += (0 - camera.position.x) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);

            count += 0.1;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // 4. Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // 5. Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);

            geometry.dispose();
            material.dispose();
            renderer.dispose();

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none fixed inset-0 -z-1 opacity-30', className)}
            {...props}
        />
    );
}
