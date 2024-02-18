"use client"

import { MemberRole } from "@prisma/client";

import { ServerWithMembersWithProfiles } from "@/types";

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
}

export const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) => {
    return (
        <div>
            server header
        </div>
    )
}