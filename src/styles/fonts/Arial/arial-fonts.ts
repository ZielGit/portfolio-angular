import jsPDF from 'jspdf';
import { ARIAL_NORMAL_BASE64, ARIAL_BOLD_BASE64 } from './arial-font-data';

/**
 * Registra la fuente Arial (normal y bold) en una instancia de jsPDF.
 * Debe llamarse una vez por instancia de doc, antes de usar doc.setFont('arial', ...).
 */
export function registerArialFonts(doc: jsPDF): void {
  doc.addFileToVFS('Arial-Regular.ttf', ARIAL_NORMAL_BASE64);
  doc.addFont('Arial-Regular.ttf', 'arial', 'normal');

  doc.addFileToVFS('Arial-Bold.ttf', ARIAL_BOLD_BASE64);
  doc.addFont('Arial-Bold.ttf', 'arial', 'bold');
}
