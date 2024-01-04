import * as cms from "@/lib/cmsConfig";
import * as components from "@/lib/cmsComponents";
import { NextResponse } from "next/server";

export function GET() {
  const config = cms.config({
    locale: "pt",
    local_backend: process.env.NODE_ENV === "development",
    collections: [
      cms.fileCollection({
        label: "Conteúdo",
        name: "conteudo",
        files: [
          cms.fileCollectionEntry({
            label: "Início",
            name: "home",
            file: "content/home.json",
            fields: [
              components.seo({
                collapsed: true,
                label: "SEO",
                name: "seo",
              }),
              cms.object({
                label: "Banner hero",
                name: "hero",
                fields: [
                  cms.file({
                    label: "Vídeo de fundo",
                    name: "video",
                    required: true,
                  }),
                  cms.markdown({
                    label: "Conteúdo",
                    name: "conteudo",
                    buttons: ["heading-two", "bold", "italic", "link"],
                    editor_components: [],
                    minimal: true,
                    required: true,
                  }),
                  components.buttonLink({
                    label: "Botão",
                    name: "botao",
                  }),
                ],
              }),
              cms.list({
                label: "Produtos",
                name: "produtos",
                summary: "{{nome}}",
                min: 0,
                max: 3,
                fields: [
                  cms.string({ label: "Nome", name: "nome", required: true }),
                  components.imageAlt({
                    label: "Imagem",
                    name: "imagem",
                    required: true,
                  }),
                  cms.string({ label: "Link", name: "link", required: true }),
                ],
              }),
              cms.object({
                label: "Sobre",
                name: "sobre",
                fields: [
                  cms.markdown({
                    label: "Conteúdo",
                    name: "conteudo",
                    required: true,
                    buttons: [
                      "heading-two",
                      "heading-three",
                      "bold",
                      "italic",
                      "link",
                    ],
                    editor_components: [],
                    minimal: true,
                  }),
                  components.buttonLink({
                    label: "Botão",
                    name: "botao",
                  }),
                  components.imageAlt({ label: "Imagem", name: "imagem" }),
                ],
              }),
            ],
          }),
          cms.fileCollectionEntry({
            label: "Menus",
            name: "menus",
            file: "content/menus.json",
            fields: [
              cms.list({
                label: "Produtos",
                name: "produtos",
                summary: "{{nome}}",
                fields: [
                  cms.string({ label: "Nome", name: "nome", required: true }),
                  cms.string({ label: "Link", name: "link", required: true }),
                  components.imageAlt({
                    label: "Imagem",
                    name: "imagem",
                    required: true,
                  }),
                ],
              }),
              cms.string({
                label: "WhatsApp principal",
                name: "whatsapp",
              }),
              cms.string({
                label: "E-mail principal",
                name: "email",
              }),
            ],
          }),
          cms.fileCollectionEntry({
            label: "Clientes",
            name: "clientes",
            file: "content/clientes.json",
            fields: [
              cms.list({
                label: "Clientes",
                name: "clientes",
                summary: "{{nome}}",
                fields: [
                  cms.image({
                    label: "Imagem",
                    name: "imagem",
                    hint: "Tamanho ideal: 124x88 pixels",
                    required: true,
                  }),
                  cms.string({ label: "Nome", name: "nome", required: true }),
                ],
              }),
            ],
          }),
          cms.fileCollectionEntry({
            label: "Sobre",
            name: "sobre",
            file: "content/sobre.json",
            fields: [
              components.seo({
                collapsed: true,
                label: "SEO",
                name: "seo",
              }),
              cms.object({
                label: "Banner",
                name: "banner",
                fields: [
                  cms.image({
                    label: "Imagem de fundo",
                    name: "imagem",
                    hint: "Tamanho ideal: 1436x410 pixels",
                    required: true,
                  }),
                  cms.markdown({
                    label: "Conteúdo",
                    name: "conteudo",
                    buttons: ["heading-two", "heading-three"],
                    editor_components: [],
                    minimal: true,
                    required: true,
                  }),
                ],
              }),
              cms.markdown({
                label: "Resumo",
                name: "resumo",
                buttons: ["bold", "italic", "link"],
                editor_components: [],
                minimal: true,
                required: true,
              }),
              cms.markdown({
                label: "Conteúdo",
                name: "conteudo",
                buttons: ["heading-three", "bold", "italic", "link"],
                editor_components: [],
                minimal: true,
                required: true,
              }),
              cms.object({
                label: "Vídeo",
                name: "video",
                fields: [
                  components.imageAlt({
                    label: "Imagem de fundo",
                    name: "imagem",
                  }),
                  cms.string({
                    label: "Link do YouTube",
                    name: "link",
                    required: true,
                  }),
                ],
              }),
              cms.markdown({
                label: "Título clientes",
                name: "clientes",
                buttons: ["heading-three"],
                editor_components: [],
                minimal: true,
                required: true,
              }),
              cms.list({
                label: "Galeria",
                name: "galeria",
                summary: "{{imagem.alt}}",
                field: components.imageAlt({ label: "Imagem", name: "imagem" }),
              }),
            ],
          }),
          cms.fileCollectionEntry({
            label: "Blog",
            name: "blog",
            file: "content/blog.json",
            fields: [
              components.seo({
                collapsed: true,
                label: "SEO",
                name: "seo",
              }),
              cms.markdown({
                label: "Banner conteúdo",
                name: "banner",
                buttons: ["heading-two", "heading-three"],
                editor_components: [],
                minimal: true,
                required: true,
              }),
              cms.list({
                label: "Categorias",
                name: "categorias",
                summary: "{{nome}}",
                fields: [
                  cms.string({ label: "Nome", name: "nome", required: true }),
                  cms.string({
                    label: "Slug",
                    name: "slug",
                    required: true,
                    hint: "Identificador único de uma categoria. Se você for alterar o nome de uma categoria, NÃO altere a slug!",
                  }),
                ],
              }),
            ],
          }),
          cms.fileCollectionEntry({
            label: "Contato",
            name: "contato",
            file: "content/contato.json",
            fields: [
              components.seo({
                collapsed: true,
                label: "SEO",
                name: "seo",
              }),
              cms.object({
                label: "Banner",
                name: "banner",
                fields: [
                  cms.image({
                    label: "Imagem de fundo",
                    name: "imagem",
                    required: true,
                    hint: "Tamanho ideal: 1436x410 pixels",
                  }),
                  cms.markdown({
                    label: "Conteúdo",
                    name: "conteudo",
                    buttons: ["heading-two", "heading-three"],
                    editor_components: [],
                    minimal: true,
                    required: true,
                  }),
                ],
              }),
              cms.list({
                label: "Redes sociais",
                name: "redes_sociais",
                summary: "{{imagem.alt}} - {{link}}",
                fields: [
                  components.imageAlt({ label: "Imagem", name: "imagem" }),
                  cms.string({ label: "Link", name: "link", required: true }),
                ],
              }),
              cms.string({
                label: "Email do formulário",
                name: "email_do_formulario",
                required: true,
              }),
              cms.list({
                label: "Telefones",
                name: "telefones",
                summary: "{{telefone}}",
                field: cms.string({
                  label: "Telefone",
                  name: "telefone",
                  required: true,
                }),
              }),
              cms.list({
                label: "WhatsApps",
                name: "whatsapps",
                summary: "{{numero}}",
                field: cms.string({
                  label: "Número",
                  name: "numero",
                  required: true,
                }),
              }),
              cms.list({
                label: "E-mails",
                name: "emails",
                summary: "{{email}}",
                fields: [
                  cms.string({
                    label: "E-mail",
                    name: "email",
                    required: true,
                  }),
                  cms.string({
                    label: "Propósito",
                    name: "proposito",
                    required: true,
                  }),
                ],
              }),
              cms.object({
                label: "Localização",
                name: "localizacao",
                summary: "{{endereco_completo}}",
                fields: [
                  cms.text({
                    label: "Endereço completo",
                    name: "endereco_completo",
                  }),
                  cms.string({
                    label: "Cidade",
                    name: "cidade",
                  }),
                  cms.string({
                    label: "Estado",
                    name: "estado",
                  }),
                  cms.string({
                    label: "CEP",
                    name: "cep",
                  }),
                ],
              }),
            ],
          }),
          cms.fileCollectionEntry({
            label: "SEO",
            name: "seo",
            file: "content/seo.json",
            fields: [
              cms.string({
                label: "URL",
                name: "url",
                required: true,
                hint: "URL final do site, sem a última barra. Ex: https://exemplo.com.br",
              }),
              cms.string({ label: "Título", name: "titulo", required: true }),
              cms.string({ label: "H1", name: "h1", required: true }),
              cms.file({ label: "Favicon", name: "favicon", required: true }),
              cms.text({
                label: "Descrição",
                name: "descricao",
                required: true,
              }),
              cms.image({
                label: "Imagem de compartilhamento",
                name: "imagem_de_compartilhamento",
                required: true,
              }),
              cms.string({
                label: "Palavras-chave",
                name: "palavras_chave",
                required: true,
              }),
            ],
          }),
        ],
      }),
      cms.folderCollection({
        label: "Produtos",
        name: "produtos",
        folder: "/content/produtos",
        format: "json",
        slug: "{{nome}}",
        identifier_field: "nome",
        fields: [
          components.seo({
            collapsed: true,
            label: "SEO",
            name: "seo",
          }),
          cms.string({ label: "Nome", name: "nome", required: true }),
          cms.list({
            label: "Modelos",
            name: "modelos",
            label_singular: "Modelo",
            summary: "{{nome}}",
            hint: "Se só houver um modelo, não aparecerá a lista de selecionar modelo.",
            fields: [
              cms.string({ label: "Nome", name: "nome", required: true }),
              cms.image({
                label: "Miniatura",
                name: "miniatura",
                required: true,
                hint: "Idealmente, até 500x500 pixels",
              }),
              cms.file({
                label: "Catálogo",
                name: "catalogo",
              }),
              cms.object({
                label: "Descrição",
                name: "descricao",
                fields: [
                  components.imageAlt({
                    label: "Imagem destaque",
                    name: "imagem_destaque",
                    hint: "Idealmente, até 1000x1000 pixels",
                  }),
                  cms.markdown({
                    label: "Conteúdo",
                    name: "conteudo",
                    buttons: ["bold", "italic", "link", "heading-four"],
                    editor_components: [],
                    minimal: true,
                    required: true,
                  }),
                ],
              }),
              cms.list({
                label: "Setores",
                name: "setores",
                label_singular: "Setor",
                summary: "{{nome}}",
                fields: [
                  cms.image({
                    label: "Ícone",
                    name: "icone",
                    required: true,
                    hint: "Tamanho ideal: 62x62 pixels, ou um arquivo SVG.",
                  }),
                  cms.string({ label: "Nome", name: "nome", required: true }),
                  cms.list({
                    label: "Conteúdo",
                    name: "conteudo",
                    types: [
                      cms.object({
                        label: "Texto",
                        name: "texto",
                        fields: [
                          cms.markdown({
                            label: "Conteúdo",
                            name: "conteudo",
                            buttons: [
                              "bold",
                              "italic",
                              "link",
                              "bulleted-list",
                              "numbered-list",
                              "heading-four",
                              "heading-five",
                            ],
                            editor_components: [],
                          }),
                        ],
                      }),
                      cms.object({
                        label: "Galeria",
                        name: "galeria",
                        fields: [
                          cms.list({
                            label: "Galeria",
                            name: "galeria",
                            label_singular: "Item da galeria",
                            types: [
                              components.imageAlt({
                                label: "Imagem",
                                name: "imagem",
                              }),
                              cms.object({
                                label: "Vídeo",
                                name: "video",
                                fields: [
                                  components.imageAlt({
                                    label: "Imagem de fundo",
                                    name: "imagem",
                                  }),
                                  cms.string({
                                    label: "Link do YouTube",
                                    name: "link",
                                    required: true,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  cms.list({
                    label: "Acessórios",
                    name: "acessorios",
                    label_singular: "Acessório",
                    summary: "{{nome}}",
                    fields: [
                      cms.string({
                        label: "Nome",
                        name: "nome",
                        required: true,
                      }),
                      cms.image({
                        label: "Imagem",
                        name: "imagem",
                        required: true,
                        hint: "Idealmente, até 300x300 pixels.",
                      }),
                    ],
                  }),
                ],
              }),
              cms.object({
                label: "Características",
                name: "caracteristicas",
                fields: [
                  cms.image({
                    label: "Imagem",
                    name: "imagem",
                    required: true,
                    hint: "Idealmente, até 800x800 pixels",
                  }),
                  cms.markdown({
                    label: "Conteúdo",
                    name: "conteudo",
                    buttons: [
                      "bold",
                      "italic",
                      "link",
                      "bulleted-list",
                      "numbered-list",
                      "heading-three",
                    ],
                    editor_components: [],
                    minimal: true,
                    required: true,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      cms.folderCollection({
        label: "Postagens do blog",
        name: "blog",
        folder: "/content/blog",
        format: "json",
        slug: "{{titulo}}",
        identifier_field: "titulo",
        fields: [
          components.seo({
            collapsed: true,
            label: "SEO",
            name: "seo",
          }),
          cms.datetime({
            label: "Data de postagem",
            name: "data",
            required: true,
          }),
          cms.string({
            label: "Título",
            name: "titulo",
            required: true,
            hint: "Se o título tiver mais que 64 caracteres, ele será cortado na listagem de posts.",
          }),
          components.imageAlt({
            label: "Imagem de destaque",
            name: "imagem_destaque",
          }),
          cms.relation({
            label: "Categoria",
            name: "categoria",
            required: true,
            collection: "conteudo",
            file: "blog",
            search_fields: ["categorias.*.nome"],
            display_fields: ["categorias.*.nome"],
            value_field: "categorias.*.slug",
          }),
          cms.markdown({
            label: "Corpo do texto",
            name: "corpo",
            required: true,
          }),
          cms.list({
            label: "Galeria",
            name: "galeria",
            types: [
              components.imageAlt({
                label: "Imagem",
                name: "imagem",
              }),
              cms.object({
                label: "Vídeo",
                name: "video",
                fields: [
                  components.imageAlt({
                    label: "Imagem de fundo",
                    name: "imagem",
                  }),
                  cms.string({
                    label: "Link do YouTube",
                    name: "link",
                    required: true,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      cms.folderCollection({
        label: "Documentos legais",
        name: "docs",
        folder: "/content/docs",
        format: "json",
        slug: "{{titulo}}",
        identifier_field: "titulo",
        fields: [
          components.seo({
            collapsed: true,
            label: "SEO",
            name: "seo",
          }),
          cms.string({ label: "Título", name: "titulo", required: true }),
          cms.markdown({
            label: "Corpo do texto",
            name: "corpo",
            required: true,
          }),
        ],
      }),
    ],
  });

  return NextResponse.json(config, {
    headers: {
      "Content-Type": "text/yaml",
    },
  });
}