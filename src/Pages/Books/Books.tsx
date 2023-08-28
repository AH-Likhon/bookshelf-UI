import Card from '@/Components/Card';
import Left from '@/Components/Left';

const Books = () => {
  return (
    <div className="w-full py-10 md:py-20 px-12 ">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        All Books
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <Left />
        <div className="w-1/1 md:w-2/3 lg:w-3/4 grid gap-8 grid-cols-1 lg:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Books;
