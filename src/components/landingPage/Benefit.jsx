import CardBenefit from './benefit/CardBenefit';
import CollapseBenefit from './benefit/CollapseBenefit';

const Benefit = () => {
  return (
    <div className="bg-gradient-to-r from-[#D3FBFE] to-[#86DEEB] mt-16 py-6 rounded-t-[48px]">
      <CardBenefit />
      <CollapseBenefit />
    </div>
  );
};

export default Benefit;
