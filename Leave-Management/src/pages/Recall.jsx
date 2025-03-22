import { useForm } from 'react-hook-form'
import { useEffect } from 'react';

function Recall(props) {
  
  const { setisEditLeaveRecallVisible, leave , setisInitiateRecall } = props;
  const { register, handleSubmit, formState: { errors }, reset , setValue } = useForm();

  const employeesData = [

    { "name":"John Steve Smith" , "department":"Human Resources"},
    { "name":"Barry Jhayson" , "department":"Finance"},
    { "name":"Tiwa Cawage" , "department":"Marketing"},
    { "name":"Jake Thawson" , "department":"Software Development"},
    { "name":"Troy Dawage" , "department":"Cyber Security"},
    { "name":"Emily Rose Parker" , "department":"Operations"},
    { "name":"Mira Lawsen" , "department":"Product Management"},
    { "name":"Sienna Rawage" , "department":"Customer Support"}

  ];

  useEffect(() => {
   
    let selectedEmployee = employeesData.find(emp => emp.name === leave?.name);

    let departmentName = selectedEmployee?.department || employeesData[0]?.department || '';

    reset({

      name: leave?.name || '' ,
      department: leave?.department || '' ,
      startDate:leave?.startDate || '',
      endDate: leave?.endDate || '',
      duration: leave?.duration || '',
      resumptionDate:'',
      relief:''
    });

    setValue('department', departmentName );

  }, [ leave , reset , setValue ]);

  const registerEmployee = async (formValues) => {

    console.log("Recall Data:" , JSON.stringify(formValues,null, 2));

    setisEditLeaveRecallVisible(false);
    setisInitiateRecall(true);
    
  }

  return (

    <div className="fixed inset-0  bg-gray-400 border-gray-400 rounded-md shadow-lg flex items-center justify-center bg-opacity-65 ">
      <form action="" className="w-full max-w-2xl p-4 rounded-md bg-white  " onSubmit={handleSubmit(registerEmployee)}>
        <h2 className="text-4xl text-black ml-16 pt-4 "><i class="fa-solid fa-phone"></i></h2>
        <h2 className="text-3xl font-bold p-2 ml-6">Leave Recall</h2>
        <h2 className="text-sm font-normal px-8 ">Fill in the Required Details to recall this employee</h2>

        <div className="block">
          <h2 className="text-base font-normal px-8 py-2">Employee Name</h2>
          <input type="text" readOnly className="w-96 bg-white border border-gray-400 rounded-md  ml-7 mt-1 px-4 py-1 focus:ring-2 focus:ring-blue-200 " name="name" id="" placeholder="Enter Your Name"
            {...register('name', {
              required: { value: 3, message: 'Field is Mandatory' },
              minLength: { value: 5, message: 'Minimum 5 Characters' },
              maxLength: { value: 25, message: 'Maximum 25 Characters' }
            })}
          />
          <p className='text-red-500 ml-9'>{errors['name']?.message}</p>

          <h2 className="text-base font-normal px-8 py-2 mt-3">Department</h2>
          <input type="text" readOnly className="w-96 bg-white border border-gray-400 rounded-md  ml-7 mt-1 px-4 py-1 focus:ring-2 focus:ring-blue-200 " name="" id=""
            {...register('department', {
              required: { value: 3, message: 'Field is Mandatory' },
              minLength: { value: 5, message: 'Minimum 5 Characters' },
              maxLength: { value: 25, message: 'Maximum 25 Characters' }
            })}
          />
          <p className='text-red-500 ml-9'>{errors['department']?.message}</p>
        </div>

        <div className="flex space-x-6 mt-5 ml-8">
          <div className="flex flex-col">
            <h2 className="text-base font-normal ">Start Date</h2>
            <input type="text" readOnly name="" id=""  className="w-72  px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md"
              {...register('startDate', {
                required: { message: "Field is Required" }
              })}
            />
            <p className='text-red-500'>{errors['startDate']?.message}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-normal">End Date</h2>
            <input type="text" readOnly name="" id=""  className="w-72 px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md"
              {...register('endDate', {
                required: { message: "Field is Required" }
              })}
            />
            <p className='text-red-500'>{errors['endDate']?.message}</p>
          </div>
        </div>

        <div className="flex space-x-6 mt-5 ml-8">
          <div className="flex flex-col">
            <h2 className="text-base font-normal"> Days Remaining</h2>
            <input type="number" readOnly name="" id="" className="w-72 px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md"
              {...register('duration', {
                required: { value: 3, message: 'Field is Mandatory' },
                minLength: { value: 1, message: 'Minimum 1 Characters' },
                maxLength: { value: 2, message: 'Minimum 2 Characters' }
              })}
            />
            <p className='text-red-500 ml-2'>{errors['remaining']?.message}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-normal"> New Resumption Date</h2>
            <input type="date" name="" id="" className="w-72 px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md"
              {...register('resumptionDate', {
                required: "New Resumption Date is Required"
              })}
            />
            <p className='text-red-500 ml-1'>{errors['resumptionDate']?.message}</p>
          </div>
        </div>

        <div className="block mt-5 ml-8">
          <h2 className="text-base font-normal">Relief Officer(s)</h2>
          <input type="text" name="" id="" className="w-full px-4 py-2 mt-3 border border-gray-400 focus:ring-2 focus:ring-blue-200 rounded-md " placeholder="James Dory"
            {...register('relief', {
              required: { value: true, message: 'Field is Mandatory' },
              minLength: { value: 5, message: 'Minimum 5 Characters' },
              maxLength: { value: 16, message: 'Minimum 16 Characters' }
            })}
          />
          <p className='text-red-500 ml-2'>{errors['relief']?.message}</p>
        </div>

        <div className="mt-4 ml-8 space-x-10">
          <button className="bg-green-500 hover:bg-green-700 text-white text-2xl text-center font-semibold p-16 py-3 rounded-lg" type='submit'> Initiate Recall</button>
          <button className="border border-red-500 hover:bg-red-500 text-red-500 hover:text-white font-semibold px-24 py-4 text-center rounded-lg" onClick={() => setisEditLeaveRecallVisible(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Recall;

