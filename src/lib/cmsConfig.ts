export type CMSConfig = {
  locale?: string;
  backend?: {
    name: "git-gateway";
    branch: string;
  };
  local_backend?: boolean | { url?: string; allowed_hosts?: string[] };
  publish_mode?: "editorial_workflow";
  media_folder?: string;
  public_folder?: string;
  media_library?: {
    name: string;
    cfg: any;
  };
  site_url?: string;
  display_url?: string;
  logo_url?: string;
  show_preview_links?: boolean;
  search?: boolean;
  slug?: {
    encoding?: "unicode" | "ascii";
    clean_accents?: boolean;
    sanitize_replacement?: string;
  };
  /**
   * Internationalization
   *
   * Docs: https://decapcms.org/docs/beta-features/#i18n-support
   */
  i18n?: {
    structure: "multiple_folders" | "multiple_files" | "single_file";
    locales: string[];
    default_locale: string;
  };

  collections: CMSCollection<any>[];
};

export function config(cfg: CMSConfig): CMSConfig {
  return {
    locale: "pt",
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    local_backend: true,
    slug: {
      clean_accents: true,
    },
    media_folder: "/public/uploads",
    public_folder: "/uploads",
    ...cfg,
  };
}

/* Collections */

export type CMSCollection<T> = {
  name: string;
  label?: string;
  label_singular?: string;
  description?: string;
  publish?: boolean;
  hide?: boolean;
  extension?:
    | string
    | "yml"
    | "yaml"
    | "toml"
    | "json"
    | "md"
    | "markdown"
    | "html";
  format?:
    | string
    | "yml"
    | "yaml"
    | "toml"
    | "json"
    | "frontmatter"
    | "yaml-frontmatter"
    | "toml-frontmatter"
    | "json-frontmatter";
  frontmatter_delimiter?: string;
  preview_path?: string;
  preview_path_date_field?: string;
  summary?: string;
  sortable_fields?: string[];
  view_filters?: {
    label: string;
    field: string;
    pattern: string | boolean;
  }[];
  view_groups?: {
    label: string;
    field: string;
    pattern?: string | boolean;
  };
  /**
   * Internationalization
   *
   * Docs: https://decapcms.org/docs/beta-features/#collection-level-configuration
   */
  i18n?:
    | boolean
    | {
        structure?: "multiple_folders" | "multiple_files" | "single_file";
        locales?: string[];
        default_locale?: string;
      };

  fields: CMSField<any>[];
} & T;

export type CMSFileCollection = {
  name: string;
  label?: string;
  i18n?:
    | boolean
    | {
        structure?: "single_file";
        locales?: string[];
        default_locale?: string;
      };
  files: CMSCollection<CMSFileCollectionEntry>[];
};
export function fileCollection(cfg: CMSFileCollection): CMSFileCollection {
  return cfg;
}
export type CMSFileCollectionEntry = {
  file: string;
};
export function fileCollectionEntry(
  cfg: CMSCollection<CMSFileCollectionEntry>
): CMSCollection<CMSFileCollectionEntry> {
  return {
    i18n: true,
    format: "json",
    ...cfg,
  };
}

export type CMSFolderCollection = {
  folder?: string;
  slug?: string;
  create?: boolean;
  delete?: boolean;
  identifier_field?: string;
  filter?: {
    field: string;
    value: any;
  };
};
export function folderCollection(
  cfg: CMSCollection<CMSFolderCollection>
): CMSCollection<CMSFolderCollection> {
  return {
    create: true,
    folder: `/src/content/${cfg.name}`,
    ...cfg,
  };
}

/* Fields */

export type CMSField<T> = {
  name: string;
  label?: string;
  hint?: string;
  widget?: string;
  pattern?: string | string[];
  default?: any;
  required?: boolean;
  comment?: string;
  i18n?: boolean | "translate" | "duplicate";
} & T;

export type CMSBoolean = {
  widget?: "boolean";
  default?: boolean;
};
export function boolean(cfg: CMSField<CMSBoolean>): CMSField<CMSBoolean> {
  return {
    widget: "boolean",
    i18n: "duplicate",
    required: false,
    ...cfg,
  };
}

export type CMSCode = {
  widget?: "code";
  default_language?: string;
  allow_language_selection: boolean;
  keys?: { code: string; lang: string };
  output_code_only?: boolean;
};
export function code(cfg: CMSField<CMSCode>): CMSField<CMSCode> {
  return {
    widget: "code",
    i18n: "translate",
    required: false,
    ...cfg,
  };
}

export type CMSColor = {
  widget?: "color";
  default?: string;
  allowInput?: boolean;
  enableAlpha?: boolean;
};
export function color(cfg: CMSField<CMSColor>): CMSField<CMSColor> {
  return {
    widget: "color",
    allowInput: true,
    i18n: "duplicate",
    required: false,
    ...cfg,
  };
}

export type CMSDatetime = {
  widget?: "datetime";
  default?: string;
  format?: string;
  date_format?: string | boolean;
  time_format?: string | boolean;
  picker_utc?: boolean;
};
export function datetime(cfg: CMSField<CMSDatetime>): CMSField<CMSDatetime> {
  return {
    widget: "datetime",
    required: false,
    i18n: "duplicate",
    date_format: "DD/MM/YYYY",
    time_format: "HH:mm",
    format: "YYYY-MM-DDTHH:mm:ssZ",
    ...cfg,
  };
}

export type CMSFile = {
  widget?: "file";
  default?: string;
  media_library?: {
    allow_multiple?: boolean;
    config?: any;
    media_folder?: string;
    choose_url?: boolean;
  };
};
export function file(cfg: CMSField<CMSFile>): CMSField<CMSFile> {
  return {
    widget: "file",
    i18n: "duplicate",
    required: false,
    ...cfg,
  };
}

export type CMSHidden = {
  widget?: "hidden";
  default?: any;
};
export function hidden(cfg: CMSField<CMSHidden>): CMSField<CMSHidden> {
  return {
    widget: "hidden",
    i18n: "duplicate",
    ...cfg,
  };
}

export type CMSImage = {
  widget?: "image";
  default?: string;
  allow_multiple?: boolean;
  config?: any;
  media_folder?: string;
  choose_url?: boolean;
  media_library?: {
    allow_multiple?: boolean;
    config?: any;
    media_folder?: string;
    choose_url?: boolean;
  };
};
export function image(cfg: CMSField<CMSImage>): CMSField<CMSImage> {
  return {
    widget: "image",
    i18n: "duplicate",
    required: false,
    ...cfg,
  };
}

export type CMSList = {
  widget?: "list";
  default?: any[];
  allow_add?: boolean;
  collapsed?: boolean;
  summary?: string;
  minimize_collapsed?: boolean;
  label_singular?: string;
  field?: CMSField<any>;
  fields?: CMSField<any>[];
  max?: number;
  min?: number;
  add_to_top?: boolean;
  types?: CMSField<CMSObject>[];
  typeKey?: string;

  i18n?: boolean;
};
export function list(cfg: CMSField<CMSList>): CMSField<CMSList> {
  return {
    widget: "list",
    summary: cfg.label || cfg.name,
    i18n: true,
    ...cfg,
  };
}

export type CMSMap = {
  widget?: "map";
  default?: any;
  decimals?: number;
  type?: "Point" | "LineString" | "Polygon";
};
export function map(cfg: CMSField<CMSMap>): CMSField<CMSMap> {
  return {
    widget: "map",
    i18n: "duplicate",
    required: false,
    ...cfg,
  };
}

export type CMSMarkdown = {
  widget?: "markdown";
  default?: string;
  minimal?: boolean;
  buttons?: (
    | "bold"
    | "italic"
    | "code"
    | "link"
    | "heading-one"
    | "heading-two"
    | "heading-three"
    | "heading-four"
    | "heading-five"
    | "heading-six"
    | "quote"
    | "bulleted-list"
    | "numbered-list"
  )[];
  editor_components?: ("image" | "code-block" | string)[];
  modes?: ("raw" | "rich_text")[];
  sanitize_preview?: boolean;
};
export function markdown(cfg: CMSField<CMSMarkdown>): CMSField<CMSMarkdown> {
  return {
    widget: "markdown",
    i18n: "translate",
    required: false,
    ...cfg,
  };
}

export type CMSNumber = {
  widget?: "number";
  default?: number;
  min?: number;
  max?: number;
  value_type?: "int" | "float" | "string";
  step?: number;
};
export function number(cfg: CMSField<CMSNumber>): CMSField<CMSNumber> {
  return {
    default: 0.0,
    value_type: "float",
    required: false,
    i18n: "duplicate",
    ...cfg,
  };
}

export type CMSObject = {
  widget?: "object";
  default?: any;
  collapsed?: boolean;
  summary?: string;
  fields?: CMSField<any>[];

  i18n?: boolean;
};
export function object(cfg: CMSField<CMSObject>): CMSField<CMSObject> {
  return {
    widget: "object",
    i18n: true,
    summary: cfg.label || cfg.name,
    ...cfg,
  };
}

export type CMSRelation = {
  widget?: "relation";
  default?: any;
  collection: string;
  value_field: string;
  search_fields: string[];
  file?: string;
  display_fields: string[];
  multiple?: boolean;
  min?: number;
  max?: number;
  options_length?: number;
};
export function relation(cfg: CMSField<CMSRelation>): CMSField<CMSRelation> {
  return {
    widget: "relation",
    i18n: true,
    required: false,
    ...cfg,
  };
}

export type CMSSelect = {
  widget?: "select";
  default?:
    | (string | { label: string; value: string })
    | (string | { label: string; value: string })[];
  options: (string | { label: string; value: string })[];
  multiple?: boolean;
  min?: number;
  max?: number;
};
export function select(cfg: CMSField<CMSSelect>): CMSField<CMSSelect> {
  return {
    widget: "select",
    i18n: true,
    required: false,
    ...cfg,
  };
}

export type CMSString = {
  widget?: "string";
  default?: string;
};
export function string(cfg: CMSField<CMSString>): CMSField<CMSString> {
  return {
    widget: "string",
    i18n: true,
    required: false,
    ...cfg,
  };
}

export type CMSText = {
  widget?: "text";
  default?: string;
};
export function text(cfg: CMSField<CMSText>): CMSField<CMSText> {
  return {
    widget: "text",
    i18n: true,
    required: false,
    ...cfg,
  };
}