"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSessions, getProviders } from "next-auth/react";
import { get } from "mongoose";

const Nav = () => {
  const UserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia logo"
          width={50}
          height={50}
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {UserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className="black_btn">
              Create Post
            </Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {/* For later use */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                ></button>
              ))}
          </>
        )}
      </div>
      {/* Mobile View */}
      <div className="sm:hdden flex relative">
        {UserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
              // to avoid unexpected behavior
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* For later use */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                ></button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
