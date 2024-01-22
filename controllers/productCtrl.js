import Product from '../models/productModel.js'

export const addProducts = async (req, res) => {

   const add = await Product.create(
      {
         name: 'ماشین ظرفشویی دوو مدل DDW-30W1252',
         en_name: 'Daewoo DDW-30W1252 Dishwasher',
         category: 'ماشین ظرفشویی',
         price: '۱۹,۶۳۰,۰۰۰',
         best_seller: true,
         brand: 'دوو',
         color: [{ color: 'white', name: "سفید" }],
         images: {
            title: "https://dkstatics-public.digikala.com/digikala-products/6ee2bdf01852e97b46b9a01be7a1465e5714bcee_1702881396.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
            others: ["https://dkstatics-public.digikala.com/digikala-products/6256b68d8003941bce91052e8aff3a4a269f20e7_1702881394.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", "https://dkstatics-public.digikala.com/digikala-products/d6b3f6e8cd45884d6125e1947d954da91e3156b9_1702881395.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", "https://dkstatics-public.digikala.com/digikala-products/4f3fdd014abf1a77c4fdea7dff18b7e752c5ba03_1702881395.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", "https://dkstatics-public.digikala.com/digikala-products/eaf22ea996d15d6fffc30439032cefe57a24ceca_1702881395.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"],
            special: "https://applianceanswers.ca/wp-content/uploads/2021/03/A2_30209_LP_Appliance-Answers_Dish_Banner_BIL_1250x400.jpg"
         },
         weight: '۴۳۰۰۰',
         height: '۸۴.۶',
         feature: '- سیستم عیب یاب هوشمند - دارای سبد مخصوص قاشق و چنگال - دارای صفحه نمایش LED - جاپودری کشویی - دارای قفل کودک - ۲ عدد بازوی آبپاش - مخزن شستشوی تمام استیل - قابلیت تنظیم ارتفاع سبد بالایی به صورت دستی - قابلیت راه اندازی دستگاه با تاخیر از ۱ تا ۱۲ ساعت - برنامه شستشوی سریع fast wash - دارای دو طبقه شستشو - متوسط مصرف آب ۱۰ لیتر - صدا ۴۹ دسیبل ',
         depth: '۶۰',
         index: '۲۹۰۹۱۵۹۴۰۰۰۲۱',
      })

   //    const add = await Product.create(
   //       {name: 'یخچال و فریزر ساید بای ساید 32 فوت دوو مدل DS-3440SS', 
   //       category: 'یخچال و فریزر', 
   //       price: '۷۳,۷۳۰,۰۰۰',
   //       best_seller: true,
   //   brand: 'دوو', 
   //       color: [{color: 'steelblue',  name: "استیل"}], 
   //       images: {
   //          title:"https://dkstatics-public.digikala.com/digikala-products/892768a8994a35ee6856c19d84763a4328a7f4e1_1683782082.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
   //          others: ["https://dkstatics-public.digikala.com/digikala-products/bff547ffbc1c512211d5ffad1c594d599c54f743_1691932232.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","https://dkstatics-public.digikala.com/digikala-products/2c70583d3cd9c2d7b1902777cf0cf6ea0c9aa78e_1691932234.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","https://dkstatics-public.digikala.com/digikala-products/1478d262a7f2114dcf97c3c75c0a821c570f317d_1691932234.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","https://dkstatics-public.digikala.com/digikala-products/3efa7e76afa46d1d888cfc68c982e3734a2e43bb_1691932233.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"]
   //       },
   //       description: [
   //          {title: 'یخچال و فریزر ساید بای ساید 32 فوت دوو مدل DS-3440SS', detail: 'دوو در این سال‌ها سعی کرده تا با محصولات رقابتی، به خوبی نیاز خانواده‌های ایرانی را برطرف سازد. یکی از محصولات جذاب این برند ساید‌بای‌ساید 32 فوت مدل DS-3440SS است که با گنجایش بالا، ظاهری زیبا و قابلیت‌های کاربردی به گزینه‌ای ایده‌آل برای خانواه‌هایی با جمعیت متوسط تبدیل شده است. شاید یکی از مهمترین ویژگی این محصول طراحی بسیار خاص و لوکس آن است که با ظاهری چهار درب در واقع دو درب یکپارچه را با یک پنل لمسی بسیار جذاب ارائه می‌کند. در ادامه به قابلیت‌های و مشخصات این ساید‌بای‌ساید کاربردی از دوو می‌پردازیم.'},
   //          {title: 'قابلیت انجماد و سرمایش سریع و گردش هوای چندگانه', detail: 'دوو این ساید‌بای‌ساید را به فناوری نوفراست مجهز کرده تا برای همیشه از شر برفک رها شوید. این قابلیت نه تنها طول عمر محصول را افزایش داده بلکه کیفیت محصولات غذایی را حفظ کرده و از آسیب‌پذیری به محتوای داخل یخچال جلوگیری می‌کند. البته در این رده از محصولات، نوفراست بودن یک امر طبیعی است اما زمانی قدر آن را می‌دانید که خاطره‌ای از پاک کردن برفک در یخچال و فریزرهای قدیمی داشته باشید.  فناوری سیستم گردش‌هوای چندگانه، کم کردن بار‌کاری موتور و یکنواخت شدن دمای تمام بخش‌های کابین را تضمین می کند. این سیستم معمولاً به وسیله یک فن گردش هوای داخلی را ایجاد می‌کند. با این موضوع دیگر نیاز نیست موتور فشار کاری بالایی را تحمل کند. تنها با وجود یک سیستم گردش هوا، به راحتی دمای ایده‌آل به بخش‌های مختلف کابین رسیده تا همه مواد‌غذایی به طور یکنواخت، دمای صحیح را تجربه کنند. البته در این مدل سامانه گردش هوای چندگانه در کنار سامانه فیلترینگ سه‌گانه Air Fresh Filter، حذف باکتری‌ها و بوی نامطبوع را هدف قرار‌داده تا طعم و کیفیت موادغذایی را حفظ کند. کمپرسور اینورتر دیجیتال یا Digital Inverter Compressor با پنج سطح عملکردی در تلاش است تا همیشه بر اساس نیاز، توان مناسبی را ارائه کند. نوسان دمایی داخل کابین با این قابلیت به خوبی پوشش داده شده تا همیشه دمایی ایده‌آل را در یخچال و فریزر شاهد باشیم. از مهمترین مزیت‌های این فناوری می‌توان به حفظ طعم و کیفیت موادغذایی، مصرف انرژی بهینه و صدای کم اشاره کرد.'},
   //          {title: 'گنجایش خوب، طراحی خیره کننده', detail: 'شاید یکی از مهم‌ترین دلایل خرید این نوع محصولات برودتی، یکپارچه بودن کل ساختار با وجود فضایی مجزا است. ساید‌بای‌ساید 32 فوتی دوو مدل DS-3440SS را باید به واقع یکی از زیباترین سایدهای بازار دانست. این مدل نه‌تنها طراحی خیره‌کننده‌ای را ارائه می‌کنند بلکه در بخش مشخصات فنی و قابلیت‌ها، یک نمونه کامل از این برند است. این مدل با ابعادی برابر 181.6 سانتی‌متر در ارتفاع، عمق 84 سانتی‌متر و پهنای 91.6 سانتی‌متر، گنجایش کلی 630 لیتر را در اختیار شما قرار می‌دهد. از این فضا، 440 لیتر آن در اختیار یخچال و 190 لیتر در اختیار فریزر قرار دارد. ظرفیت کلی این ساید‌بای‌ساید بسیار مفید ارزیابی می‌شود تا خیال شما برای قراردادن موادغذایی مورد‌علاقه همیشه راحت باشد. طراحی فضای داخلی یخچال شامل پنج طبقه، دو کشو و پنج طبقه روی درب است. البته در این بخش نباید از درب مخفی یا هوم‌بار با دسترسی آسان چشم‌پوشی کرد. دو کشوی یخچال به لطف ساختار خوب، با حفظ رطوبت، هدفی جز تازه نگه‌داشتن میوه‌ها و سبزیجات ندارند. فریزر این مدل با سه طبقه، سه کشو و سه طبقه روی درب، میزبان موادغذایی است که برای نگهداری نیاز به انجماد دارند. با نگاهی سطحی می‌توان متوجه شد که ساید‌بای‌ساید 32 فوت دوو مدل DS-3440SS به آبسردکن و یخساز اتوماتیک با منبع آب‌شهری مجهز است تا همیشه آب سرد و یخ در اختیار شما قرار دهد. یکی دیگر از جذابیت‌های طراحی این مدل درب مخفی یا هوم بار است که با طراحی پنجره‌ای دسترسی به فضای بسیار گسترده را در لحظه به شما ارائه می‌کند. هوم‌بار مجهز به سامانه سرمایش فلزی یا Metal Cooling تمام بخش بالایی درب یخچال را پوشش داده تا به یکی از بزرگترین هوم‌بارهای موجود در بین ساید‌بای‌سایدها تبدیل شود. این ویژگی نه تنها زیبا است بلکه با دسترسی آسان به کاهش مصرف انرژی و هدر رفتن سرمایش ایجاد شده کمک می‌کند. قابلیت Metal Cooling با بازتابش سرما به داخل تلاش دارد تا نگهداری از سرما و حفظ آن داخل کابین را بر‌عهده گیرد.'},
   //          {title: 'دیگر ویژگی‌ها و جمع‌بندی', detail: 'کمپرسور کم مصرف با بازدهی بالا، ساید بای ساید دوو مدل DS-3440SS را با مصرف انرژی در رده A+ به دست مشتری می‌رساند. کمپرسور کم مصرف، پر‌توان و کم صدا در کنار قابلیت‌های گفته شده از این محصول، یک گزینه تمام عیار ساخته است. البته در این میان نباید از حالت خواب، حالت ذخیره انرژی، هشدار باز بودن درب‌ها، فیلتر تصفیه آب‌شهری، لاستیک دور‌درب با قابلیت آنتی‌باکتریال و طبقات شیشه‌ای نشکن چشم پوششی کرد.'}
   //       ],
   //          capacity: "۴۴۰",
   //          facilities: ["بدون برفک", "نمایشگر", "اخطار باز ماندن درب ", "آبسردکن"],
   //          floor: "۵",
   //          drawer: "۲",
   // })

   // const add = await Product.create(
   //    {name: 'یخچال 5 فوت ایستکول مدل ميني بار 1835', 
   //    category: 'یخچال و فریزر', 
   //    price: '۵,۹۹۰,۰۰۰',
   //    brand: دوو,
   // best_seller: true,
   //    color: [{color: 'steelblue',  name: "استیل"}, {color: 'white',  name: "سفید"}], 
   //    images: {
   //       title: "https://dkstatics-public.digikala.com/digikala-products/3a7b568fd437b77be10fb952ea8684540128c67d_1662275830.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
   //       others: ["https://dkstatics-public.digikala.com/digikala-products/3a7b568fd437b77be10fb952ea8684540128c67d_1662275830.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","https://dkstatics-public.digikala.com/digikala-products/d2841ea5e30c231fde95165ff7314eacbb2553f2_1662275838.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","https://dkstatics-public.digikala.com/digikala-products/a773cb7bd11f963164ae114483113630843c258f_1666731670.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","https://dkstatics-public.digikala.com/digikala-products/b13a22400433822b31884502599d505680fac624_1666731674.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"],
   //       special: "",
   //    },
   //    description: [
   //       {title: 'معرفی', detail: 'یخچال 5 فوت ایستکول مدل ميني بار 1835 یکی از محصولات برند ایستکول است که با ارائه محصولاتی با کیفیت، یکی از برندهای معتبر در زمینه تولید و عرضه یخچال‌ها با انواع مختلف مدل‌ها است. این بار با ارائه مدل یخچال 5 فوت بدون برفک 1835، بار دیگر توانسته است رضایت مشتریان خود را جلب کند. یخچال 5 فوت ایستکول مدل ميني بار 1835، با داشتن حجم کم و ابعاد کوچک، گزینه‌ای مناسب برای مصرف کنندگانی است که به دنبال یک یخچال کوچک و کارآمد هستند. همچنین این محصول با داشتن سیستم دیفراست، امکان یخ زدگی را به حداقل می‌رساند و کمک می‌کند تا محیط داخلی یخچال بیشتر برای نگهداری مواد غذایی مورد استفاده قرار گیرد. این یخچال با ابعاد کوچک و حجم کم، گزینه مناسبی برای فضاهای کوچک و محدود است. با توجه به طراحی خاص و فناوری مدرن،یخچال مینی بار ایستکول بسیار کم مصرف است و می‌تواند کمک کند تا هزینه‌های انرژی شما را کاهش دهد. با داشتن سه طبقه، این محصول امکان دسترسی آسان و تفکیک مواد غذایی را فراهم می‌کند. در نهایت، یخچال 5 فوت مدل مینی بار 1835 از برند eastcool در مقایسه با یخچال ایستکول 5 فوت سیلور، با داشتن تمامی این ویژگی ها، یک انتخاب عالی برای کسانی است که به دنبال یک یخچال کوچک، کارآمد و کم مصرف هستند.'},
   //       {title: 'یخچال 5 فوت ایستکول مدل مینی بار 1835', detail: 'ایستکول یکی از برندهای تجاری شرکت تولیدی صنعتی تکران مبرد است که سال‌ها در زمینه تولید محصولات برودتی فعال است. یخچال مینی‌بار 1835 با ابعاد کوچک و رنگ بندی‌های متنوع، محصولی است که می‌توان از آن در هر موقعیت مکانی مانند هتل، آزمایشگاه، بیمارستان، ادارات، منزل و دیگر مکان‌ها استفاده کرد. ابعاد کوچک این یخچال محدودیتی برای شما ایجاد نکرده و فضای زیادی را آشغال نمی‌کند.'},
   //       {title: 'گنجایش کلی', detail: 'یخچال 5 فوت ایستکول مدل مینی بار 1835 با ابعادی شامل ارتفاع 80 سانتی‌متر، عمق 53 سانتی‌متر و پهنای 44 سانتی‌متر، گنجایش کلی 89 لیتر را در اختیار شما قرار می‌دهد. این نوع از یخچال‌ها به دلیل طراحی کوچکی که دارند، در هر مکانی مثل هتل‌ها، ادارات، مراکز‌خرید و تجاری، منزل و دیگر مکان‌ها قابل استفاده هستند. البته به این نکته باید توجه کنید که از میان حجم کلی 89 لیتر، 71 لیتر در اختیار یخچال و 9 لیتر در اختیار فریزر کوچک این مدل قرار دارد. در واقع چندان نباید روی گنجایش فریزر این مدل حساب باز کرد اما با توجه به هدف ساختار، این موضوع قابل قبول است. طراحی داخلی یخچال 5 فوت ایستکول مدل مینی بار 1835 شامل سه طبقه یخچال، دو طبقه روی درب، یک کشو و یک طبقه فریزر است. با اینکه با فضای داخلی کوچکی روبرو هستیم اما ایستکول با قراردادن ریل‌های مختلف، قابلیت تغییر ارتفاع طبقات را در اختیار شما قرارداده تا در صورت نیاز شخصی‌سازی طبقات را بر‌عهده گیرید. تک کشوی موجود با حفظ رطوبت به تازه ماندن میوه‌ها و سبزیجات کمک می‌کند. با توجه به اینکه از نمایشگر و کنترل دیجیتالی خبری نیست، برای تغییر دما به ترموستات دستی که داخل کابین قرار گرفته باید رجوع کرد. ولوم تنظیم ترموستات قابلیت تغییر دمای جالبی داشته که بر اساس نیاز و نوع مواد غذایی می‌توان شدت دما را با آن تنظیم کرد. در بخش بیرونی طراحی دستگیره مخفی باعث هماهنگی و جذابیت بصری بیشتر این محصول شده است. از مزیت دستگیره‌های مخفی باید به افزایش طول عمر درب به دلیل نبود برجستگی و آسیب‌پذیر نبودن این بخش اشاره کرد.'},
   //       {title: 'کم صدا با مصرف انرژی خوب', detail: 'موتور پر‌بازده و کم مصرف یخچال 5 فوت ایستکول مدل مینی بار 1835 میزان نویز یا صدای تولیدی کمی را ارائه می‌کند. با اینکه با یک یخچال جمع و جور و کم مصرف طرف هستیم اما رده انرژی A آن قابل چشم پوشی نیست. کم مصرف بودن این مدل، زمانی خود را نشان می‌دهد که پس از استفاده طولانی مدت به هزینه‌های انرژی آن توجه کنید، آنجا‌است که لبخند رضایت روی لب شما نقش می‌بندد. اگر به دنبال خرید یخچالی با ابعاد کوچک و کاربردی هستید، یخچال 5 فوت ایستکول مدل مینی بار 1835 گزینه مناسب شما است. این یخچال با داشتن امکانات قابل قبول همچون گنجایش کلی 89 لیتر، تعداد مناسب طبقات با عمق کاربردی، ساختار مستحکم و موتور کم مصرف با رده انرژی A یک انتخاب منطقی است. همچنین در بخش امکانات قابلیت تنظیم شیب به لطف پایه‌های قابل تنظیم را نباید در این مدل از یاد برد.'},
   //    ],
   //       capacity: "۸۰",
   //       // facilities: ["بدون برفک", "نمایشگر", "اخطار باز ماندن درب ", "آبسردکن"],
   //       floor: "۳",
   //       drawer: "۱",
   //       opening_side: "به سمت راست "
   // })

   // const add = await Product.create(req.body)
   res.json(add)
}

export const getProducts = async (req, res) => {
   const { page } = req.query
   const limit = 5
   const count = await Product.find().countDocuments()
   const countDocuments = (count / limit)
   const get = await Product.find().limit(limit).skip((page - 1) * limit)
   res.json({ get, countDocuments: Math.ceil(countDocuments) })
}

export const getProductsCategory = async (req, res) => {
   const { category } = req.body
   const { page } = req.query
   const limit = 5
   const count = await Product.find({ category }).countDocuments()
   const countDocuments = (count / limit)
   const get = await Product.find({ category }).limit(limit).skip((page - 1) * limit)
   res.json({ get, countDocuments: Math.ceil(countDocuments) })
}

export const getOneProduct = async (req, res) => {
   const { id } = req.params
   const getOne = await Product.findById(id)
   res.send(getOne)
}

export const getFavorites = async (req, res) => {
   const arr = req.body
   const find = await Product.find({ _id: arr })
   console.log(find);
   res.json(find)
}

export const search = async (req, res) => {
   const { text } = req.body
   const find = await Product.find().or([
      { name: { $regex: text, $options: 'i' } },
      { category: { $regex: text, $options: 'i' } }
   ])
   res.json(find)
}

export const reviewRating = async (req, res) => {
   try {
      const { review, rating, productId, userId, userName } = req.body
      console.log(userName, '-------------------------------');
      // const foundProduct = await Product.findOne({ _id: productId })
      // let userAlreadyRated = foundProduct.review.find(ev => {
      //    return ev.userId === userId
      // })
      // if (userAlreadyRated) {
      //    return res.status(409).send('You have already reviewed this item!')
      // } else {
         const reviewSubmit = await Product.findByIdAndUpdate(productId, { $push: {review : {userId, review, userName, rating} } }, { new: true })
         const ratingSubmit = await Product.findByIdAndUpdate(productId, { $push: {rating : {userId, rating}  } }, { new: true })
         res.json({reviewSubmit, ratingSubmit} )
      // }
   } catch (error) {
      throw new Error(error)
   }
}

export default { getProducts, addProducts, getOneProduct, getFavorites, getProductsCategory, search, reviewRating }