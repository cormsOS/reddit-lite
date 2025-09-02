"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import { getRandomUpvotes, getRandomAccountAge } from "@/utils/random";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar
            src={session.data.user.image || ""}
            className="hover:scale-105 transition-transform cursor-pointer border-2 border-reddit-orange/20 hover:border-reddit-orange/40"
          />
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <div className="p-6 w-72 bg-white rounded-xl shadow-elevated">
            <div className="flex items-center gap-3 mb-4">
              <Avatar
                src={session.data.user.image || ""}
                size="lg"
                className="border-2 border-reddit-orange/30"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  u/{session.data.user.name}
                </h3>
                <p className="text-custom-muted text-sm">
                  Redditing for {getRandomAccountAge()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="font-semibold text-reddit-orange">
                  {getRandomUpvotes()}
                </div>
                <div className="text-xs text-custom-muted">Karma</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-reddit-blue">
                  {Math.floor(Math.random() * 20) + 1}
                </div>
                <div className="text-xs text-custom-muted">Posts</div>
              </div>
            </div>

            <form action={actions.signOut}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-reddit-orange to-red-500 text-white hover:shadow-glow-orange"
                size="md"
              >
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button
              type="submit"
              color="secondary"
              variant="bordered"
              className="border-reddit-blue text-reddit-blue hover:bg-reddit-blue/10"
            >
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <Button
              type="submit"
              className="bg-gradient-orange text-white hover:shadow-glow-orange"
            >
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
