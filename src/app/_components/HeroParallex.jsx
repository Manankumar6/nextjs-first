"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
     const products = [
       
       
        {
          title: "EShop",
          link: "https://ecom-gamma-five.vercel.app/",
          thumbnail:
            "/image/ecom2.png",
        },
        {
            title: "Sound Wave Studio",
            link: "https://sound-wave-studio.vercel.app/",
            thumbnail:
              "/Heroimg/soundwave4.png",
          },
        
       
        {
            title: "Sound Wave Studio",
            link: "https://sound-wave-studio.vercel.app/",
            thumbnail:
              "/Heroimg/soundwave3.png",
          },
      
       
        {
          title: "Chat App",
          link: "https://mern-chat-app-three-ruby.vercel.app/",
          thumbnail:
            "/Heroimg/chat.png",
        },
       
      
      
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
            title: "Sound Wave Studio",
            link: "https://sound-wave-studio.vercel.app/",
            thumbnail:
              "/image/music.png",
          },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },

        {
            title: "Sound Wave Studio",
            link: "https://sound-wave-studio.vercel.app/",
            thumbnail:
              "/Heroimg/soundwave2.png",
          },
        {
          title: "SmartBridge",
          link: "https://smartbridgetech.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
          title: "Renderwork Studio",
          link: "https://renderwork.studio",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },
        {
            title: "TechTutor",
            link: "https://techtutoronline-dmy8.vercel.app/",
            thumbnail:
              "/image/home.png",
          },
      
        {
          title: "Creme Digital",
          link: "https://cremedigital.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
          title: "Golden Bells Academy",
          link: "https://goldenbellsacademy.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
          title: "Invoker Labs",
          link: "https://invoker.lol",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
          title: "E Free Invoice",
          link: "https://efreeinvoice.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
      ];
  return <HeroParallax products={products} />;
}

