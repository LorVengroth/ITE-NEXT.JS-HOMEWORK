"use client";

import { useState } from "react";

export default function CreateProductModalComponent() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black">
            Create Product
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">

          <div>
            <label className="mb-2 block text-lg font-medium text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Enter product name"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-lg font-medium text-gray-700">
              Price
            </label>

            <input
              type="number"
              placeholder="Enter price"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-lg font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Enter description"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Save
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}