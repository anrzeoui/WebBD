(() => {
  const categories = [
    {
      id: "men",
      name: "Эрэгтэй",
      description: "Ажил, спорт, чөлөөт цагт зориулсан эрэгтэй бараанууд.",
      subcategories: [
        { id: "shirt", name: "Цамц" },
        { id: "pants", name: "Өмд" },
        { id: "shoes", name: "Гутал" },
        { id: "underwear", name: "Дотуур хувцас" },
        { id: "sneakers", name: "Пүүз & Кет" },
        { id: "suits", name: "Хослол & Дан хүрэм" }
      ]
    },
    {
      id: "women",
      name: "Эмэгтэй",
      description: "Өдөр тутам, оффис болон онцгой мөчид тохирох эмэгтэй коллекц.",
      subcategories: [
        { id: "dress", name: "Даашинз" },
        { id: "bag", name: "Цүнх" },
        { id: "shoes", name: "Гутал" },
        { id: "outerwear", name: "Гадуур хувцас" },
        { id: "jewelry", name: "Гоёл чимэглэл" },
        { id: "suits", name: "Хослол & Дан хүрэм" }
      ]
    },
    {
      id: "tech",
      name: "Электрон бараа",
      description: "Өдөр тутмын хэрэглээнд зориулагдсан ухаалаг төхөөрөмжүүд.",
      subcategories: [
        { id: "phone", name: "Гар утас" },
        { id: "laptop", name: "Laptop" },
        { id: "headphones", name: "Чихэвч" },
        { id: "phone-accessories", name: "Гар утасны дагалдах хэрэгсэл" },
        { id: "computer-accessories", name: "Компьютерын дагалдах хэрэгсэл" }
      ]
    },
    {
      id: "kids",
      name: "Хүүхдийн",
      description: "Хүүхдийн тоглоом, хувцас, гутал болон өдөр тутмын хэрэглэл.",
      subcategories: [
        { id: "toy", name: "Тоглоом" },
        { id: "clothes", name: "Хувцас" },
        { id: "shoes", name: "Гутал" },
        { id: "backpack", name: "Үүргэвч" },
        { id: "care", name: "Хүүхэд арчилгаа" }
      ]
    },
    {
      id: "home",
      name: "Гэрийн тавилга",
      description: "Интерьерээ илүү дулаан, эмх цэгцтэй болгох шийдлүүд.",
      subcategories: [
        { id: "frame", name: "Хүрээ" },
        { id: "furniture", name: "Тавилга" },
        { id: "household", name: "Гэр ахуйн бараа" },
        { id: "bedding", name: "Матрасс & Ор дэрний хэрэглэл дагалдах хэрэгсэл" },
        { id: "carpet", name: "Гэрийн Хивс & Дэвсгэр" },
        { id: "lighting", name: "Гэрийн гэрэлтүүлэг" }
      ]
    },
    {
      id: "cosmetics",
      name: "Гоо сайхан",
      description: "Арьс арчилгаа, будалт, өдөр тутмын гоо сайхны багц.",
      subcategories: [
        { id: "makeup", name: "Нүүр будалт" },
        { id: "skincare", name: "Арьс арчилгаа" },
        { id: "haircare", name: "Үс арчилгаа" },
        { id: "oralcare", name: "Амны хөндийн арчилгаа сайхны дагалдах хэрэгсэл" },
        { id: "beauty-tools", name: "Гоо сайхны Багаж & Багс" },
        { id: "nailcare", name: "Гар, Хумс арчилгаа сайхны Багаж & Багс" },
        { id: "beauty-accessories", name: "Гоо сайхны дагалдах хэрэгсэл" },
        { id: "fragrance", name: "Үнэртэн сайхны хэрэгсэл" }
      ]
    }
  ];

  const productVariants = [
    { slug: "essential", prefix: "Essential", badge: "Шинэ", priceOffset: 0, ratingOffset: 0, reviewOffset: 0, detail: "Өдөр тутмын хэрэглээнд тохиромжтой", note: "Өдөр бүр сонгоход эвтэйхэн үндсэн загвар." },
    { slug: "classic", prefix: "Classic", badge: "Онцлох", priceOffset: 12000, ratingOffset: 0.1, reviewOffset: 8, detail: "Классик хийцтэй", note: "Хялбар хослох өнгө, хэлбэртэй." },
    { slug: "premium", prefix: "Premium", badge: "-10%", priceOffset: 28000, ratingOffset: 0.2, reviewOffset: 16, detail: "Сайжруулсан материалтай", note: "Илүү чанартай материал, цэвэр хийцтэй." },
    { slug: "urban", prefix: "Urban", badge: "Hot", priceOffset: 18000, ratingOffset: 0.1, reviewOffset: 11, detail: "Хотын хэмнэлд тохиромжтой", note: "Ажил, сургууль, гадуур гарахад эвтэйхэн." },
    { slug: "soft", prefix: "Soft", badge: "Set", priceOffset: 22000, ratingOffset: 0.2, reviewOffset: 21, detail: "Зөөлөн мэдрэмжтэй", note: "Удаан хэрэглэхэд тухтай байдлыг хадгална." },
    { slug: "active", prefix: "Active", badge: "-15%", priceOffset: 34000, ratingOffset: 0.3, reviewOffset: 27, detail: "Идэвхтэй хөдөлгөөнд тохиромжтой", note: "Ачаалалтай өдөр ч хэрэглээнд найдвартай." },
    { slug: "signature", prefix: "Signature", badge: "Limited", priceOffset: 46000, ratingOffset: 0.4, reviewOffset: 35, detail: "Онцгой сонголт", note: "Бэлэг болон өөртөө авахад илүү гоёмсог сонголт." }
  ];

  const productProfiles = {
    men: {
      shirt: profile("Oxford Shirt", "North Thread", "цамц", 99000, "SHIRT", "linear-gradient(135deg, #d7e3f0, #87a3c1)", "Амьсгалдаг даавуутай, оффис болон casual төрхөд зохицох цамц.", ["Regular fit", "Cotton blend", "Office casual"], ["M", "L", "XL"], ["White", "Sky blue", "Navy"]),
      pants: profile("Straight Pants", "Axis", "өмд", 129000, "PANTS", "linear-gradient(135deg, #d9d0c8, #8a7568)", "Өдөр тутмын хөдөлгөөнд эвтэйхэн straight fit өмд.", ["Stretch fabric", "Side pocket", "Easy care"], ["30", "32", "34"], ["Stone", "Black", "Khaki"]),
      shoes: profile("Leather Shoes", "Walkmate", "гутал", 179000, "SHOES", "linear-gradient(135deg, #ece3d6, #6f5848)", "Ажил болон уулзалтад тохирох цэвэр хийцтэй эрэгтэй гутал.", ["Soft insole", "Anti-slip sole", "Smart casual"], ["40", "41", "42", "43"], ["Black", "Brown"]),
      underwear: profile("Comfort Innerwear", "BaseLayer", "дотуур хувцас", 49000, "INNER", "linear-gradient(135deg, #e8edf2, #8c98a6)", "Зөөлөн даавуу, өдөржин эвтэйхэн байх дотуур хувцас.", ["Breathable", "Soft waistband", "Easy wash"], ["M", "L", "XL"], ["Black", "Grey", "White"]),
      sneakers: profile("Street Sneaker", "Peak Motion", "пүүз", 189000, "KICKS", "linear-gradient(135deg, #2a3d4d, #7f9ab0)", "Алхалт, өдөр тутмын хувцастай хослох хөнгөн пүүз.", ["Cushion sole", "Mesh upper", "Lightweight"], ["40", "41", "42", "43"], ["Black", "White", "Navy"]),
      suits: profile("Tailored Blazer Set", "Mode Line", "хослол", 299000, "SUIT", "linear-gradient(135deg, #d6d2cc, #45464b)", "Оффис, арга хэмжээнд зохицох цэвэр силуэттэй хослол.", ["Tailored fit", "Lined blazer", "Pressed pants"], ["M", "L", "XL"], ["Charcoal", "Navy", "Black"])
    },
    women: {
      dress: profile("Satin Dress", "Sora", "даашинз", 189000, "DRESS", "linear-gradient(135deg, #f8d6cf, #c76f6f)", "Арга хэмжээ болон өдөр тутамд зохицох гоёмсог даашинз.", ["Soft drape", "Hidden zip", "Midi length"], ["S", "M", "L"], ["Rose", "Black", "Ivory"]),
      bag: profile("City Tote Bag", "Mysa", "цүнх", 149000, "TOTE", "linear-gradient(135deg, #efd4c2, #c18e73)", "Ноутбук, тэмдэглэл, өдөр тутмын хэрэглэл багтаах цүнх.", ["3 compartments", "Soft handle", "Vegan leather"], ["One size"], ["Tan", "Cream", "Black"]),
      shoes: profile("Block Heel Shoes", "Luna Step", "гутал", 159000, "HEEL", "linear-gradient(135deg, #f3dfdd, #9f6970)", "Ажил болон уулзалтад тохирох тогтвортой өсгийтэй гутал.", ["Comfort heel", "Soft lining", "Stable sole"], ["36", "37", "38", "39"], ["Nude", "Black", "Wine"]),
      outerwear: profile("Quilted Jacket", "LIU JO", "гадуур хувцас", 269000, "JACKET", "linear-gradient(135deg, #c9d6e5, #6d7a8d)", "Сэрүүн өдөрт дулаахан, хөнгөн мэдрэмжтэй гадуур хувцас.", ["Light padding", "Waist detail", "Wind resistant"], ["S", "M", "L"], ["Black", "Beige", "Olive"]),
      jewelry: profile("Minimal Jewelry Set", "Aurora", "гоёл чимэглэл", 79000, "JEWEL", "linear-gradient(135deg, #fff0c6, #c8a34d)", "Өдөр тутмын төрхөд жижиг гялалзах акцент нэмэх гоёл.", ["Nickel free", "Gift box", "Layered style"], ["One size"], ["Gold", "Silver", "Rose gold"]),
      suits: profile("Tailored Co-ord Set", "Mila Office", "хослол", 239000, "COORD", "linear-gradient(135deg, #eadde8, #92708c)", "Оффис болон албан уулзалтад зохицох эмэгтэй хослол.", ["Relaxed blazer", "Clean waistline", "Mix and match"], ["S", "M", "L"], ["Cream", "Navy", "Black"])
    },
    tech: {
      phone: profile("Nova Smart Phone", "Nova", "гар утас", 1499000, "PHONE", "linear-gradient(135deg, #dbe9ff, #6785c1)", "Хурдан ажиллагаа, тод дэлгэц, өдөржин барих батарейтай гар утас.", ["AMOLED display", "Fast charge", "Dual camera"], ["128GB", "256GB"], ["Blue", "Graphite", "Silver"], 65000),
      laptop: profile("AirBook Laptop", "Aster", "laptop", 2399000, "LAPTOP", "linear-gradient(135deg, #f3f5f8, #9da6b2)", "Сургууль, ажил, аялалд авч явахад хөнгөн laptop.", ["SSD storage", "Long battery", "Slim body"], ["14-inch", "15-inch"], ["Silver", "Space grey"], 95000),
      headphones: profile("Noise Cancel Headphones", "Wave", "чихэвч", 259000, "ANC", "linear-gradient(135deg, #d6d8dc, #59606b)", "Ажил, аялалд төвлөрөхөд туслах дуу тусгаарлалттай чихэвч.", ["Bluetooth", "ANC", "Comfort earcups"], ["One size"], ["Black", "Silver", "Blue"], 35000),
      "phone-accessories": profile("Phone Accessory Kit", "Orbit", "гар утасны дагалдах хэрэгсэл", 59000, "PHONE+", "linear-gradient(135deg, #e7f2f7, #6ca5b8)", "Цэнэглэгч, хамгаалалт, баригч зэрэг өдөр тутмын хэрэгсэл.", ["Cable included", "Travel ready", "Scratch protection"], ["Universal"], ["Black", "Clear", "White"]),
      "computer-accessories": profile("Desk Tech Accessory", "DeskPro", "компьютерын дагалдах хэрэгсэл", 89000, "DESK", "linear-gradient(135deg, #ece8ff, #7770b5)", "Ажлын ширээг эмх цэгцтэй болгох компьютерын хэрэгсэл.", ["Plug and play", "Compact", "Work desk ready"], ["Universal"], ["Graphite", "White", "Grey"])
    },
    kids: {
      toy: profile("Robo Builder Set", "PlayBox", "тоглоом", 69000, "TOY", "linear-gradient(135deg, #ffe9aa, #ff9d5c)", "Сэтгэн бодох чадвар хөгжүүлэх эвлүүлдэг тоглоом.", ["6+ age", "STEM play", "Safe edges"], ["6+"], ["Multi"]),
      clothes: profile("Soft Cotton Set", "MiniMood", "хувцас", 79000, "KID", "linear-gradient(135deg, #d9f1ff, #8fb7cf)", "Хүүхдийн өдөр тутмын хөдөлгөөнд эвтэйхэн хувцас.", ["Cotton blend", "Easy wash", "Comfort fit"], ["110", "120", "130"], ["Blue", "Pink", "Cream"]),
      shoes: profile("Tiny Step Shoes", "Little Walk", "гутал", 89000, "STEP", "linear-gradient(135deg, #fff1d0, #d3946a)", "Алхалт, сургууль, тоглоомын талбайд тохирох хүүхдийн гутал.", ["Flexible sole", "Easy strap", "Lightweight"], ["28", "29", "30", "31"], ["Navy", "Pink", "Grey"]),
      backpack: profile("School Backpack", "Bright Bag", "үүргэвч", 59000, "BAG", "linear-gradient(135deg, #d8f0e4, #62a987)", "Хичээлийн дэвтэр, усны сав, жижиг хэрэглэл багтаах үүргэвч.", ["Padded straps", "Bottle pocket", "Light body"], ["Small", "Medium"], ["Mint", "Navy", "Yellow"]),
      care: profile("Kids Care Set", "Tiny Care", "хүүхэд арчилгаа", 39000, "CARE", "linear-gradient(135deg, #fce0ef, #d38fb5)", "Өдөр тутмын цэвэрлэгээ, арчилгаанд зориулсан багц.", ["Gentle formula", "Travel size", "Family friendly"], ["Set"], ["Soft pink", "White"])
    },
    home: {
      frame: profile("Gallery Frame", "Nest", "хүрээ", 39000, "FRAME", "linear-gradient(135deg, #f0ddcc, #b58f70)", "Зураг, постероо цэгцтэй харагдуулах дулаан өнгөтэй хүрээ.", ["Wall mount", "Clear cover", "Minimal edge"], ["A4", "A3"], ["Oak", "Black", "White"]),
      furniture: profile("Nordic Lounge Chair", "Oakroom", "тавилга", 329000, "CHAIR", "linear-gradient(135deg, #efe4d6, #a78d73)", "Зочны болон унтлагын өрөөнд тохирох тав тухтай тавилга.", ["Wood legs", "Soft fabric", "Easy assembly"], ["One size"], ["Beige", "Olive", "Grey"], 55000),
      household: profile("Stack Storage Box", "Homey", "гэр ахуйн бараа", 39000, "BOX", "linear-gradient(135deg, #e6e5e1, #9b988f)", "Жижиг хэрэглэлээ эмх цэгцтэй хадгалах гэр ахуйн шийдэл.", ["Lid included", "Stackable", "Easy clean"], ["Medium", "Large"], ["Ivory", "Grey", "Clear"]),
      bedding: profile("Comfort Bedding Set", "Dream Nest", "ор дэрний хэрэглэл", 119000, "BED", "linear-gradient(135deg, #edf4fb, #9ab2cb)", "Унтлагын өрөөг илүү тухтай болгох ор дэрний хэрэглэл.", ["Soft cotton", "Breathable", "Machine washable"], ["Queen", "King"], ["White", "Sage", "Blue"]),
      carpet: profile("Soft Area Carpet", "Warm Floor", "хивс", 149000, "RUG", "linear-gradient(135deg, #f0e7d8, #b88d62)", "Өрөөний өнгө төрхийг дулаан болгох зөөлөн хивс.", ["Low pile", "Easy vacuum", "Anti-slip back"], ["120x180", "160x230"], ["Sand", "Grey", "Terracotta"]),
      lighting: profile("Ambient Table Lamp", "Glow Home", "гэрэлтүүлэг", 89000, "LAMP", "linear-gradient(135deg, #fff4c8, #d19a44)", "Оройн гэрлийг зөөлөн болгож, өрөөнд дулаан уур амьсгал нэмэх гэрэл.", ["Warm light", "LED ready", "Compact base"], ["Small", "Medium"], ["Gold", "White", "Black"])
    },
    cosmetics: {
      makeup: profile("Velvet Makeup Kit", "Muse", "нүүр будалт", 69000, "MAKEUP", "linear-gradient(135deg, #ffd8dd, #d36a7a)", "Өдөр тутам болон үдшийн будалтад тохирох нүүр будалтын багц.", ["Soft finish", "Blendable", "Travel friendly"], ["Set"], ["Rose", "Nude", "Brick"]),
      skincare: profile("Hydra Skin Routine", "Derm Lab", "арьс арчилгаа", 89000, "SKIN", "linear-gradient(135deg, #fbe7ee, #d8a7bc)", "Чийгшүүлэх, тайвшруулах өдөр тутмын арьс арчилгаа.", ["Cleanser", "Serum", "Cream"], ["3 pcs"], ["Rose", "White"]),
      haircare: profile("Silk Hair Care", "Hair Lab", "үс арчилгаа", 59000, "HAIR", "linear-gradient(135deg, #f8e9c9, #c5a467)", "Үсийг зөөлөн, гялалзсан харагдуулах арчилгааны багц.", ["Shampoo", "Treatment", "Heat care"], ["Set"], ["Amber", "Cream"]),
      oralcare: profile("Fresh Oral Care", "Smile Co", "амны хөндийн арчилгаа", 39000, "SMILE", "linear-gradient(135deg, #e2f8ff, #72b4c7)", "Амны хөндийн өдөр тутмын арчилгаанд зориулсан хэрэгсэл.", ["Gentle clean", "Travel case", "Daily use"], ["Set"], ["Mint", "White"]),
      "beauty-tools": profile("Beauty Brush Tool", "Brush Bar", "гоо сайхны багаж", 49000, "BRUSH", "linear-gradient(135deg, #fde3d7, #b87961)", "Будалтыг жигд тараах багс, хэрэгслийн сонголт.", ["Soft bristles", "Easy grip", "Washable"], ["Set"], ["Rose", "Black"]),
      nailcare: profile("Nail Care Kit", "Nail Muse", "гар, хумс арчилгаа", 45000, "NAIL", "linear-gradient(135deg, #f5ddec, #b86e9b)", "Гар, хумсыг цэвэрхэн харагдуулах арчилгааны багц.", ["File included", "Cuticle care", "Compact pouch"], ["Set"], ["Pink", "Silver"]),
      "beauty-accessories": profile("Beauty Accessory Pouch", "Glow Kit", "гоо сайхны дагалдах хэрэгсэл", 35000, "POUCH", "linear-gradient(135deg, #eee4ff, #9a7ad0)", "Гоо сайхны жижиг хэрэгслээ цэгцтэй авч явах pouch.", ["Zip pocket", "Easy clean", "Compact"], ["Small", "Medium"], ["Lavender", "Black", "Cream"]),
      fragrance: profile("Fresh Fragrance Mist", "Aroma Lane", "үнэртэн", 79000, "SCENT", "linear-gradient(135deg, #f1e2ff, #a77fd0)", "Өдөр тутам хэрэглэхэд зөөлөн үнэртэй үнэртэн.", ["Long lasting", "Gift ready", "Soft trail"], ["50ml", "100ml"], ["Floral", "Fresh", "Warm"])
    }
  };

  function profile(title, brand, item, basePrice, imageLabel, imageTone, description, details, sizes, colors, oldPriceStep = 25000) {
    return {
      title,
      brand,
      item,
      basePrice,
      imageLabel,
      imageTone,
      description,
      details,
      sizes,
      colors,
      oldPriceStep,
      rating: 4.5,
      reviews: 18
    };
  }

  function createProduct(category, subcategory, profileData, variant) {
    const price = profileData.basePrice + variant.priceOffset;
    const rating = Number(Math.min(5, profileData.rating + variant.ratingOffset).toFixed(1));

    return {
      id: `${category.id}-${subcategory.id}-${variant.slug}`,
      category: category.id,
      subcategory: subcategory.id,
      name: `${variant.prefix} ${profileData.title}`,
      brand: profileData.brand,
      price,
      oldPrice: price + profileData.oldPriceStep,
      badge: variant.badge,
      rating,
      reviews: profileData.reviews + variant.reviewOffset,
      imageLabel: profileData.imageLabel,
      imageTone: profileData.imageTone,
      shortDescription: `${subcategory.name} төрөлд тохирох ${profileData.item}.`,
      description: `${profileData.description} ${variant.note}`,
      details: [...profileData.details, variant.detail],
      sizes: profileData.sizes,
      colors: profileData.colors
    };
  }

  const products = categories.flatMap((category) => (
    category.subcategories.flatMap((subcategory) => {
      const profileData = productProfiles[category.id][subcategory.id];
      return productVariants.map((variant) => createProduct(category, subcategory, profileData, variant));
    })
  ));

  window.SHOPPY_DATA = {
    categories,
    products,
    featuredProductIds: [
      "women-bag-signature",
      "tech-phone-premium",
      "home-furniture-urban",
      "cosmetics-skincare-soft",
      "men-shirt-classic",
      "kids-toy-active"
    ]
  };
})();
