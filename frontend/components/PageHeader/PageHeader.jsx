import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className="md:min-h-[30vh] p-4 flex items-center justify-center bg-gradient-to-r from-gray-100 via-[#ffd5d5] to-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-3 items-center justify-center max-w-xl">
          <h1 className="text-lg md:text-5xl font-bold">{title}</h1>

          <Breadcrumb className="text-sm">
            <BreadcrumbItem>
              <Link href="/" passHref>
                <BreadcrumbLink as={"span"}>Home</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={"span"}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
