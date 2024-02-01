<script setup>
import {computed} from "vue";

const computeColour = computed(() => {
  return (text) => {
    if (text === "Music") {
      return "pink";
    } else if (text === "Fashion") {
      return "blue";
    } else {
      return "red";
    }
  };
});
const {post} = defineProps(["post"]);
</script>

<template>
  <div class="flex flex-col">
    <div class="text-2xl font-semibold mb-6">
      {{ post.title }}
    </div>
    <div class="flex justify-between mb-6 items-center">
      <button :class="`py-1 px-2 rounded-3xl bg-${computeColour(post.tag)}-600 text-white text-base`">{{ post.tag }}
      </button>
      <div class="text-gray-300">
        {{ post.date }}
      </div>
    </div>

    <div>
      <div class="mb-10">
        <img :src="`/carousel/${post.img}`" class="h-80 object-cover w-full">
      </div>
      <div>
        {{ post.content }}
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque perferendis provident saepe
        voluptate? Aliquid consequatur culpa dolorum eaque perferendis placeat quia recusandae rerum. Accusamus
        asperiores autem culpa ea eius error esse excepturi expedita impedit itaque iure, laborum nulla omnis
        perferendis quaerat quasi quisquam quos ratione sint ut. Accusamus aperiam, atque blanditiis, cum distinctio
        dolorem dolorum eaque error eveniet fugit ipsa quas tempore? Architecto consequuntur dignissimos dolorum facilis
        incidunt laudantium libero optio quia, quidem saepe temporibus vitae. Autem eligendi est fugiat fugit impedit
        molestiae, molestias nobis non temporibus vero. Architecto consequatur cumque error explicabo in ipsum magnam,
        minima nulla obcaecati repellendus soluta, suscipit temporibus totam! Alias ducimus minus vel veniam. Architecto
        dolorem facilis ipsa minima nostrum numquam odit perferendis vero? A accusamus, alias deleniti dolore eos
        eveniet incidunt, iste magnam magni maxime nam nesciunt perspiciatis quibusdam, recusandae repellat repellendus
        similique sunt ullam. Blanditiis ducimus eius minima natus nihil obcaecati optio quis reprehenderit saepe
        temporibus. Deleniti ea illo inventore ipsum labore necessitatibus neque perspiciatis quam soluta vitae. Beatae
        consequuntur culpa cumque ducimus eligendi et eum fugit labore, nemo non perferendis perspiciatis porro possimus
        veniam veritatis! Amet assumenda deserunt ex facilis reprehenderit? Aliquam amet architecto asperiores
        aspernatur atque consequatur consequuntur culpa cum cumque ea eius enim facilis fuga fugit, labore magni nam
        necessitatibus nostrum porro qui quidem reprehenderit sit sunt? Cum, dignissimos, ullam! Amet quidem
        reprehenderit sint. Cum, dolore doloribus earum explicabo ipsa iste itaque modi non obcaecati optio pariatur
        quaerat quasi quidem quis reiciendis voluptate voluptatem, voluptates. Asperiores consequuntur cum facere
        incidunt nulla odit sequi voluptatem! Ab aliquam aliquid animi architecto at atque cupiditate deserunt dolore
        doloremque id itaque iure laborum maiores quasi, quisquam ratione, repellendus reprehenderit tenetur unde ut.
        Beatae commodi consectetur dicta doloremque earum enim expedita hic ipsa ipsum iste natus necessitatibus officia
        perspiciatis qui, repellat reprehenderit tempore, tenetur. Ab atque dignissimos distinctio ducimus, eos ex
        expedita explicabo illo ipsam laborum magni mollitia nemo omnis quaerat reiciendis, repellendus rerum sequi sunt
        vero voluptatem! Beatae, consectetur ea enim explicabo facilis harum id, magni necessitatibus odit officiis quam
        repudiandae sit voluptatibus! Accusantium aspernatur autem consequatur eaque eos error ex mollitia neque nisi,
        officia, porro sed unde voluptates. Accusantium aliquam animi aperiam delectus deleniti dignissimos dolorem eius
        et eveniet exercitationem hic illo itaque, magnam maiores nam obcaecati odio perferendis porro quasi quidem
        quisquam rem reprehenderit, sunt tempora vero vitae voluptate voluptatibus? Adipisci autem cum deleniti incidunt
        nulla, perspiciatis ratione! Amet consequuntur, dolor eos maiores molestias pariatur perferendis, placeat quasi
        quo saepe totam vero. Alias assumenda at autem beatae blanditiis consectetur corporis debitis dolore earum
        eligendi esse expedita explicabo facilis id illum impedit ipsum maiores modi nam nobis odit officia, omnis
        perferendis quas, quidem quis recusandae, repudiandae sit sunt vel veniam voluptate voluptates voluptatibus.
        Consequatur corporis dicta excepturi minus nemo? Adipisci amet asperiores cum delectus deleniti ducimus eius
        error eveniet, impedit, incidunt labore laboriosam libero natus placeat provident quibusdam quo, quod sed
        similique tenetur unde voluptatem voluptatum. Cupiditate, dolor est excepturi obcaecati placeat quod sequi!
        Dolores, ex laboriosam. Alias aliquid amet aperiam architecto assumenda aut autem blanditiis delectus deserunt
        dolore doloremque enim eos error excepturi facilis fugiat ipsam iste iusto labore magnam, magni molestiae
        numquam officiis omnis pariatur perferendis placeat porro provident quas quibusdam quos rem similique, totam
        unde velit veritatis voluptas. A ab commodi dolorem ducimus eaque eius eos esse excepturi fuga, id in ipsa,
        laudantium non pariatur praesentium quae quam quia quibusdam quis quisquam quos sit suscipit vel voluptate
        voluptates! Autem, dolorum eius eligendi esse, ipsa iusto laboriosam nemo omnis possimus quae quaerat quam qui
        ratione rem sint tempora tenetur totam vero voluptas voluptatem! Aliquam blanditiis consequatur eligendi eos
        excepturi incidunt ipsam obcaecati odit perferendis possimus quibusdam, suscipit tempora tenetur veniam vitae
        voluptates voluptatum? Consequatur culpa distinctio earum eveniet id magni molestiae molestias odio soluta
        voluptate. Asperiores aspernatur dicta dignissimos distinctio dolor ducimus enim est eum eveniet explicabo fugit
        illo incidunt ipsum maxime minima nesciunt non omnis optio perferendis perspiciatis praesentium quam quas saepe
        tenetur velit, veritatis, voluptate voluptatem? Aperiam commodi deserunt eius et rerum similique soluta.
        Architecto, at autem beatae consequatur et expedita impedit, inventore magni odit perspiciatis porro quae, quis
        recusandae tempora voluptate. Cumque esse explicabo iste magni minima mollitia nam quisquam repellendus tempora.
        Accusantium cupiditate ducimus ex expedita fugit maiores mollitia, nulla optio provident quas quidem rerum saepe
        suscipit. Alias at, cupiditate distinctio eos fugiat modi, nihil possimus quasi quidem rem, reprehenderit rerum
        sequi similique sint sit velit voluptatibus? Autem dignissimos, eligendi ex iusto natus quas quo temporibus
        ullam voluptatum? Beatae consequuntur culpa doloremque eius facilis illo illum, impedit labore laborum
        laudantium libero magnam minima natus nobis, perferendis placeat possimus quae quaerat qui quod recusandae sed
        suscipit tempora? Aliquam aspernatur consectetur dignissimos, dolore ea earum excepturi expedita facere in
        incidunt iste itaque magnam maiores maxime molestiae mollitia nam obcaecati officia optio possimus quae
        quibusdam quis quo quod ratione repellendus reprehenderit saepe sapiente sequi tempore. Ab amet consequatur
        dolorem, ex facilis labore, laudantium nemo odio quaerat sapiente similique tempore. Autem expedita nostrum
        pariatur qui reprehenderit suscipit ullam! Accusantium alias commodi consequatur ducimus eius, et in
        necessitatibus obcaecati officiis perspiciatis praesentium quia quidem recusandae repellat reprehenderit
        repudiandae saepe soluta, vero. Asperiores dolor est nostrum quis quo. Ad amet autem commodi corporis delectus
        esse excepturi exercitationem, illo inventore ipsa molestiae natus odit porro quam quas, repellendus
        reprehenderit repudiandae, sint suscipit ullam vel vero voluptas voluptatibus? Animi beatae dolorem enim et
        facilis, incidunt maiores minima, pariatur quis reprehenderit sapiente vitae? Assumenda aut commodi corporis
        dicta dolorum, eaque expedita, laborum nisi quae repellat vitae voluptatibus. Incidunt iure molestias suscipit!
        Accusamus adipisci alias aut consectetur consequuntur cum debitis deleniti deserunt distinctio doloremque eaque
        eos est ex fuga iste magnam nam natus necessitatibus nesciunt, officiis quibusdam quis tempore totam vel veniam!
        Dolore, dolorem eligendi est facilis, maiores nostrum, odio praesentium quisquam reiciendis repellendus vitae
        voluptatem. Adipisci aliquid cumque cupiditate dicta dolore doloribus expedita, facilis illum incidunt ipsum,
        itaque maxime modi necessitatibus praesentium, quasi qui quod quos repudiandae rerum velit! A aperiam dolore,
        eaque in itaque molestiae nemo non? Adipisci aliquam, animi aperiam aspernatur consectetur cum, dolorem ducimus
        eaque eius eos id incidunt iure labore laborum magni minus numquam praesentium quae quaerat quasi qui quis quod
        sed soluta temporibus totam voluptatem. Accusantium, at aut doloremque doloribus, eaque esse exercitationem
        facilis natus officia omnis praesentium qui repellat, saepe temporibus totam veritatis voluptates? Ab
        consequatur cupiditate deleniti dignissimos eaque explicabo iure labore maiores modi molestiae molestias quae,
        quaerat quidem, quod saepe tempora ullam vitae voluptate. Aliquam et facere fugit laborum maiores nesciunt odio
        quis sed. Ad alias animi commodi delectus eaque ex incidunt libero natus nesciunt odit praesentium quis, quod
        sapiente sed sit temporibus voluptate! Aperiam facilis laudantium natus nisi quisquam quod ratione rerum velit!
        Assumenda atque beatae consectetur deleniti dolore doloribus expedita explicabo facere fugiat, illo ipsa
        molestiae nulla pariatur praesentium qui quos, temporibus ut velit veritatis vero. Ad aliquid aspernatur at
        consequatur dignissimos doloremque doloribus eaque excepturi in incidunt iusto laudantium magnam magni maxime
        nam nemo nostrum nulla numquam obcaecati pariatur quam, repellendus similique ullam! Animi, architecto culpa
        dolor, dolorum error inventore libero nulla numquam odio quae quidem ratione, sapiente. Animi facere hic illo
        impedit iste mollitia placeat voluptatum. Accusamus accusantium amet architecto asperiores blanditiis
        consectetur ea esse et fuga ipsam iste itaque iusto laborum libero molestiae molestias nesciunt nihil numquam
        odio perferendis perspiciatis provident qui quidem quos, ratione sapiente soluta tempora tempore temporibus
        tenetur totam vero voluptate voluptatum! Alias aliquid beatae commodi cumque dolor earum esse hic in ipsum
        itaque maxime minus, molestias necessitatibus nemo optio praesentium quas quasi qui quidem, quo quos ratione
        repellendus repudiandae suscipit vel vero vitae voluptates. A aliquam amet aspernatur autem consequatur corporis
        dolor, doloremque dolores enim ex expedita facilis laborum libero magni molestias possimus quod, repellendus
        sint soluta unde vero voluptate voluptates. Doloremque eaque in molestias perspiciatis, possimus repellendus
        totam voluptate. Aspernatur culpa dolorem eius hic officiis, reiciendis suscipit voluptates. Autem dignissimos
        eaque fugiat illo, iusto neque nihil! Atque beatae commodi, consectetur dolores ducimus eum ex exercitationem
        hic in magni maxime, natus nesciunt numquam, quaerat quod rem vero. Dolorum harum iusto magnam maxime nam nobis
        odit quas tenetur, voluptatem! Aliquam aspernatur deserunt dignissimos, earum explicabo facere harum impedit in
        laborum laudantium maiores molestiae perferendis placeat quidem quis rerum sint. Accusamus adipisci aliquam
        assumenda at blanditiis cumque cupiditate delectus dolorem dolorum enim error, excepturi impedit ipsam labore
        magni maiores minus necessitatibus nobis odio pariatur qui recusandae rem repellat sapiente sint tempora
        temporibus vel veniam voluptas voluptatibus. Deleniti distinctio doloremque fugiat ipsam optio pariatur quisquam
        vel? Exercitationem nemo officiis quis, sapiente suscipit temporibus unde. Cum enim magni, minus omnis quos
        unde? Aliquid earum error est et excepturi iusto officiis sed sequi ut veritatis. Eius minus obcaecati officia
        velit? Ab adipisci aliquam asperiores consectetur corporis cumque debitis deserunt dignissimos, dolore eaque
        eligendi enim eum hic id laboriosam odit porro quae quia quis temporibus vel velit veritatis. Ab amet animi
        aperiam aspernatur at consectetur consequuntur culpa cum deleniti dolor dolore eaque eius ex itaque iure iusto
        nam nihil nostrum perferendis porro possimus quae, quaerat quidem quos reiciendis repellat repudiandae saepe
        tenetur totam unde ut veniam voluptatem voluptatum. Ab amet doloremque est impedit minus molestiae nihil sit ut.
        Amet eos hic id ipsum mollitia nostrum porro quod tempora veritatis voluptate! Ad aspernatur culpa dicta, et eum
        ex excepturi exercitationem expedita facere hic, illo natus nostrum odit pariatur quos repudiandae sapiente
        similique. Aliquam at atque beatae commodi cum, cupiditate deleniti ducimus eos ex explicabo laborum libero modi
        pariatur perspiciatis quas quasi quia tempora totam. Culpa debitis dolor ea eos itaque nisi nobis numquam, quos!
        Aspernatur corporis dolor, ducimus eaque esse modi molestiae odit officia porro rem sint veritatis. Corporis
        debitis enim excepturi libero molestiae nisi veritatis! Ad adipisci aspernatur consectetur cupiditate dolore
        doloremque exercitationem odit repellat repellendus tempore. Atque cumque debitis deserunt maiores minus nobis
        quidem sit voluptate. Architecto, deserunt dicta ipsa iure numquam obcaecati quo totam? Accusamus autem commodi
        cum dolorem doloremque illo illum nam nemo neque nesciunt, numquam possimus quaerat quis quo similique totam ut
        veniam, vitae, voluptatem voluptatum! Accusamus aliquam animi architecto asperiores consectetur consequatur
        consequuntur corporis cumque cupiditate deserunt dicta dolorem dolores doloribus eius est eum, exercitationem
        explicabo illo impedit iure magni minima modi nihil nisi nobis non nulla pariatur perferendis quis rem
        reprehenderit rerum soluta sunt temporibus totam veritatis voluptas. Aut commodi consectetur cum cupiditate
        doloremque earum eius ex excepturi exercitationem fugiat laudantium maxime odit optio pariatur, provident quod
        sapiente totam ullam ut vitae. A aliquid architecto commodi dolor doloribus dolorum est explicabo, facere fugiat
        ipsum maxime non officiis porro praesentium quidem ratione reiciendis repellendus reprehenderit unde vitae.
        Aliquam aperiam at commodi consequatur delectus doloremque dolorum ex fugiat fugit hic in iusto laboriosam
        molestias nam nobis optio perferendis porro quaerat quam quia quos rem repellendus, rerum similique sit tenetur
        ut vitae. A accusantium amet asperiores, autem beatae deleniti dolorem et fugiat id in ipsam labore magnam minus
        modi quas, repellat repellendus sed sint tempora totam unde vero voluptates! Aut consequatur corporis cum cumque
        maxime nam, omnis provident sequi totam voluptas. Aspernatur deleniti dicta dolore fugit ipsum minima possimus
        veritatis? A error facere fugit, incidunt maiores numquam rem rerum totam? Ad at cumque debitis dolore dolorem
        ea eius enim explicabo facere harum impedit, iusto magnam magni maxime minus natus nihil numquam obcaecati
        pariatur possimus praesentium quo quos ratione recusandae repellat sapiente voluptatum. Aliquam asperiores
        delectus, dicta earum enim est fuga harum hic illum iure iusto labore magnam minima modi molestiae molestias
        nemo nostrum odit optio perferendis porro quae quia quidem repudiandae ullam unde vel voluptatum? Asperiores
        minima nesciunt nostrum quae qui reiciendis rerum voluptate voluptates. At ea, eius illo molestias optio quas
        quibusdam reiciendis! A aliquid asperiores atque aut, beatae commodi consequatur cupiditate distinctio dolor,
        dolores eligendi expedita facere facilis harum itaque iure maiores minima nulla obcaecati officiis quaerat quam
        quasi ratione reiciendis sapiente veritatis voluptas voluptatum? Autem deserunt eos et ex ipsa itaque neque
        nobis qui quidem quo, rerum sed sint ut voluptatem voluptates. Ab accusamus adipisci aliquam asperiores cumque
        cupiditate earum impedit incidunt ipsa iste laudantium maxime nostrum nulla quaerat qui repellendus sed, sunt
        tempora tenetur unde ut velit.
      </div>
    </div>
  </div>
</template>
