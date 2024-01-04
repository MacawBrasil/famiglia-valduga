import type { CMSField, CMSObject } from "./cmsConfig";
import * as cms from "./cmsConfig";

export function imageAlt(cfg: CMSField<CMSObject>): CMSField<CMSObject> {
  return cms.object({
    ...cfg,
    fields: [
      cms.image({ label: "Imagem", name: "url", required: true }),
      cms.string({ label: "Alt", name: "alt", required: true }),
    ],
  });
}

export function buttonLink(cfg: CMSField<CMSObject>): CMSField<CMSObject> {
  return cms.object({
    ...cfg,
    fields: [
      cms.string({ label: "Texto", name: "texto" }),
      cms.string({ label: "Link", name: "url" }),
    ],
  });
}

export function seo(cfg: CMSField<CMSObject>): CMSField<CMSObject> {
  return cms.object({
    ...cfg,
    fields: [
      cms.string({ label: "Título", name: "titulo" }),
      cms.string({ label: "H1", name: "h1" }),
      cms.text({ label: "Descrição", name: "descricao" }),
      cms.image({
        label: "Imagem de compartilhamento",
        name: "imagem_de_compartilhamento",
      }),
      cms.string({ label: "Palavras-chave", name: "palavras_chave" }),
    ],
  });
}