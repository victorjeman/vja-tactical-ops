import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    username: string;
    role: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    username: string;
  }
}
