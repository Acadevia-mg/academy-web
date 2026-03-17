"use client";

import { useEffect, useState } from "react";

type AnnouncementData = {
  show: boolean;
  text: string;
  backgroundColor: string;
  textColor: string;
  link: string;
  linkText: string;
  showLink: boolean;
};

const defaultAnnouncement: AnnouncementData = {
  show: false,
  text: "",
  backgroundColor: "#003B5C",
  textColor: "#FFFFFF",
  link: "",
  linkText: "",
  showLink: false,
};

export default function AnnouncementPage() {
  const [data, setData] = useState<AnnouncementData>(defaultAnnouncement);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/announcement")
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData({
            show: result.show ?? false,
            text: result.text ?? "",
            backgroundColor: result.backgroundColor ?? "#003B5C",
            textColor: result.textColor ?? "#FFFFFF",
            link: result.link ?? "",
            linkText: result.linkText ?? "",
            showLink: result.showLink ?? false,
          });
        }
      })
      .catch(() => {});
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await fetch("/api/admin/announcement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Duyuru Yonetimi</h1>

      {/* Preview */}
      {data.show && (
        <div
          className="mb-6 p-3 rounded-lg text-center text-sm"
          style={{
            backgroundColor: data.backgroundColor,
            color: data.textColor,
          }}
        >
          {data.text}
          {data.showLink && data.link && (
            <a href={data.link} className="ml-2 underline">
              {data.linkText || "Daha fazla"}
            </a>
          )}
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">Goster</label>
          <input
            type="checkbox"
            checked={data.show}
            onChange={(e) => setData({ ...data, show: e.target.checked })}
            className="rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Metin
          </label>
          <textarea
            value={data.text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Arka Plan Rengi
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={data.backgroundColor}
                onChange={(e) =>
                  setData({ ...data, backgroundColor: e.target.value })
                }
                className="h-10 w-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={data.backgroundColor}
                onChange={(e) =>
                  setData({ ...data, backgroundColor: e.target.value })
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yazi Rengi
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={data.textColor}
                onChange={(e) =>
                  setData({ ...data, textColor: e.target.value })
                }
                className="h-10 w-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={data.textColor}
                onChange={(e) =>
                  setData({ ...data, textColor: e.target.value })
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">
            Link Goster
          </label>
          <input
            type="checkbox"
            checked={data.showLink}
            onChange={(e) => setData({ ...data, showLink: e.target.checked })}
            className="rounded"
          />
        </div>

        {data.showLink && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link URL
              </label>
              <input
                type="url"
                value={data.link}
                onChange={(e) => setData({ ...data, link: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link Metni
              </label>
              <input
                type="text"
                value={data.linkText}
                onChange={(e) => setData({ ...data, linkText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 pt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
          >
            {saving ? "Kaydediliyor..." : "Kaydet"}
          </button>
          {saved && <span className="text-sm text-green-600">Kaydedildi!</span>}
        </div>
      </div>
    </div>
  );
}
