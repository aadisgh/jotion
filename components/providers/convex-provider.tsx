"use client";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { neobrutalism } from "@clerk/themes";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";

import './style.css';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const ConvexClientProvider = ({
  children
}: {
  children: ReactNode;
}) => (
  <ClerkProvider  appearance={{
    elements: {
      formButtonPrimary: {
        fontSize: 14,
        textTransform: "none",
        backgroundColor: "#f8c00d",
        "&:hover, &:focus, &:active": {
          backgroundColor: "gray",
        },
      },
    },

    layout: {
      socialButtonsPlacement: 'top',
      socialButtonsVariant: 'iconButton',
      
    },
    baseTheme :  neobrutalism,
  
    variables : {
      
      colorPrimary: "#f8c00d",
    
    }
  }}


    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
  >
    <ConvexProviderWithClerk 
    

      useAuth={useAuth}
      client={convex}
    >
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);
