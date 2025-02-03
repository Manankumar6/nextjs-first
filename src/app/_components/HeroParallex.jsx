"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  const products = [


    {
      id: 1,
      title: "EShop",
      link: "https://ecom-gamma-five.vercel.app/",
      thumbnail:
        "/image/ecom2.png",
    },
    {
      id: 2,
      title: "Sound Wave Studio",
      link: "https://sound-wave-studio.vercel.app/",
      thumbnail:
        "/Heroimg/soundwave4.png",
    },


    {
      id: 3,
      title: "Sound Wave Studio",
      link: "https://sound-wave-studio.vercel.app/",
      thumbnail:
        "/Heroimg/soundwave3.png",
    },


    {
      id: 4,
      title: "Chat App",
      link: "https://mern-chat-app-three-ruby.vercel.app/",
      thumbnail:
        "/Heroimg/chat.png",
    },



    {
      id: 5,
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      id: 6,
      title: "Sound Wave Studio",
      link: "https://sound-wave-studio.vercel.app/",
      thumbnail:
        "/image/music.png",
    },
    {
      id: 7,
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },

    {
      id: 8,
      title: "Sound Wave Studio",
      link: "https://sound-wave-studio.vercel.app/",
      thumbnail:
        "/Heroimg/soundwave2.png",
    },
    {
      id: 9,
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      id: 10,
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
    {
      id: 11,
      title: "TechTutor",
      link: "https://techtutoronline-dmy8.vercel.app/",
      thumbnail:
        "/image/home.png",
    },

    {
      id: 12,
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      id: 13,
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      id: 14,
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      id: 15,
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  return <HeroParallax products={products} />;
}

