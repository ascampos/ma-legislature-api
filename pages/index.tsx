import type { NextPage } from "next";
import {
  OpenAPI,
  Committee,
  CommitteeSummary,
  OpenAPIConfig,
} from "../lib/services";
import { CommitteesService } from "../lib/services/services/CommitteesService";
import useSwr from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
// OpenAPI.BASE = "http://localhost:3000";
// OpenAPI.WITH_CREDENTIALS = false;
OpenAPI.HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
};
const Home: NextPage = () => {
  const { data, error } = useSwr<CommitteeSummary[]>(
    CommitteesService.committeesGetCommitteeCodes.name,
    CommitteesService.committeesGetCommitteesAll
  );
  if (error) return <div>Failed to load committees</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <ul>
      {data.map((committee) => (
        <li key={committee.committeeCode}>
          <Link href="/user/[id]" as={`/user/${committee.committeeCode}`}>
            {`User ${committee.details}`}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
