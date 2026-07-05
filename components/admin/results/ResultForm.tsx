"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { uploadResultImage } from "@/lib/actions/upload";
import { createResult, updateResult } from "@/lib/actions/results";

type Result = {
  id: string;
  title: string;
  description: string;
  before_image: string;
  after_image: string;
};

interface ResultFormProps {
  result?: Result;
}

export default function ResultForm({ result }: ResultFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(result?.title ?? "");
  const [description, setDescription] = useState(result?.description ?? "");

  const [beforeImageUrl, setBeforeImageUrl] = useState(
    result?.before_image ?? "",
  );

  const [afterImageUrl, setAfterImageUrl] = useState(result?.after_image ?? "");

  const [beforeImageFile, setBeforeImageFile] = useState<File | null>(null);

  const [afterImageFile, setAfterImageFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      let beforeImage = beforeImageUrl;
      let afterImage = afterImageUrl;

      if (beforeImageFile) {
        beforeImage = await uploadResultImage(beforeImageFile);
      }

      if (afterImageFile) {
        afterImage = await uploadResultImage(afterImageFile);
      }

      const payload = {
        title,
        description,
        before_image: beforeImage,
        after_image: afterImage,
      };

      if (result) {
        await updateResult(result.id, payload);
      } else {
        await createResult(payload);
      }

      router.push("/admin/results");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border bg-white p-8 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold">
          {result ? "Edit Result" : "New Result"}
        </h2>

        <p className="mt-2 text-slate-500">
          Upload transformation photos and describe the result.
        </p>
      </div>

      <div className="space-y-2">
        <label className="font-medium">Title</label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border p-4"
          placeholder="Acne Treatment Result"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">Description</label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border p-4"
          placeholder="Describe the customer's transformation..."
          required
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* BEFORE */}

        <div className="space-y-4">
          <label className="font-medium">Before Image</label>

          {(beforeImageFile || beforeImageUrl) && (
            <div className="relative aspect-square overflow-hidden rounded-2xl border">
              <Image
                src={
                  beforeImageFile
                    ? URL.createObjectURL(beforeImageFile)
                    : beforeImageUrl
                }
                alt="Before"
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="w-full rounded-xl border p-3"
            onChange={(e) => setBeforeImageFile(e.target.files?.[0] ?? null)}
          />
        </div>

        {/* AFTER */}

        <div className="space-y-4">
          <label className="font-medium">After Image</label>

          {(afterImageFile || afterImageUrl) && (
            <div className="relative aspect-square overflow-hidden rounded-2xl border">
              <Image
                src={
                  afterImageFile
                    ? URL.createObjectURL(afterImageFile)
                    : afterImageUrl
                }
                alt="After"
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="w-full rounded-xl border p-3"
            onChange={(e) => setAfterImageFile(e.target.files?.[0] ?? null)}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          disabled={loading}
          className="rounded-xl bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-60"
        >
          {loading ? "Saving..." : result ? "Update Result" : "Create Result"}
        </button>
      </div>
    </form>
  );
}
