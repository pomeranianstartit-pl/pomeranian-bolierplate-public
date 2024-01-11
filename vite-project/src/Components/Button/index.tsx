

interface ButtonProps{
  title:string;
  disabled?:boolean;
  onClick:()=>void;

}
export const Button=({title,disabled, onClick}:ButtonProps)=>{
  return <button disabled={disabled} onClick={onClick}>{title}</button>
}