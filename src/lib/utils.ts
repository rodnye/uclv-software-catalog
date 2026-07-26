export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

export function totalSize(files: { size: number }[]): string {
  return formatSize(files.reduce((acc, f) => acc + f.size, 0));
}

export function getInitials(name: string): string {
  return name
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export const categoryColors: Record<string, string> = {
  Utilidades: 'bg-blue-50 text-blue-700 border-blue-200',
  'Diseño y Fotografía': 'bg-purple-50 text-purple-700 border-purple-200',
  Productividad: 'bg-amber-50 text-amber-700 border-amber-200',
  'Ejecutivos y Runtimes': 'bg-orange-50 text-orange-700 border-orange-200',
  'Herramientas del Sistema': 'bg-slate-100 text-slate-700 border-slate-300',
  'Audio y Multimedia': 'bg-violet-50 text-violet-700 border-violet-200',
  Finanzas: 'bg-sky-50 text-sky-700 border-sky-200',
  Seguridad: 'bg-green-50 text-green-700 border-green-200',
  Desarrollo: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Navegadores Web': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Redes y Comunicaciones': 'bg-teal-50 text-teal-700 border-teal-200',
};

export function getCategoryColor(category: string): string {
  return categoryColors[category] ?? 'bg-gray-50 text-gray-700 border-gray-200';
}

export const defaultIconBg = 'from-gray-500 to-gray-700';
