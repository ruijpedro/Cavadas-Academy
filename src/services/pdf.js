import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export async function exportElementToPdf(elementId,filename='2YOU_Academy_Relatorio.pdf'){const el=document.getElementById(elementId);if(!el)throw new Error('Elemento não encontrado');const canvas=await html2canvas(el,{scale:2,backgroundColor:'#000'});const img=canvas.toDataURL('image/png');const pdf=new jsPDF('p','mm','a4');const w=pdf.internal.pageSize.getWidth();const h=canvas.height*w/canvas.width;pdf.addImage(img,'PNG',0,0,w,h);const blob=pdf.output('blob');pdf.save(filename);return blob}
