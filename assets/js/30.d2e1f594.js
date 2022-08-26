(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(t,s,n){t.exports=n.p+"assets/img/jsjy12.d244fd08.jpg"},365:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"相关配对t检验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关配对t检验"}},[t._v("#")]),t._v(" 相关配对t检验")]),t._v(" "),a("p",[a("strong",[t._v("同一个人两组实验")])]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#相关配对t检验"}},[t._v("相关配对t检验")]),a("ul",[a("li",[a("a",{attrs:{href:"#为啥选左尾"}},[t._v("为啥选左尾")])]),a("li",[a("a",{attrs:{href:"#标准误差的计算"}},[t._v("标准误差的计算")]),a("ul",[a("li",[a("a",{attrs:{href:"#scipy计算"}},[t._v("scipy计算")])])])]),a("li",[a("a",{attrs:{href:"#相关样本t检验-效应量的计算"}},[t._v("相关样本T检验 效应量的计算")])]),a("li",[a("a",{attrs:{href:"#code"}},[t._v("code")])])])])])]),t._v("\n特鲁普效应是著名的心理学现象，展示了人们对事物的认知过程已是一个自动化的历程。\n当有一个新的刺激出现时，如果它的特征和原先的刺激相似或符合一致，便会加速人们的认知；\n反之，若新的刺激特征与原先的刺激不相同，则会干扰人们的认知，使人们的所需的反映数据变长。\n简单来说，斯特鲁普效应是当有与原有认知不同的情况出现时，人们的反应时间会较长。\n我们想要验证斯特鲁普效应。"),a("p"),t._v(" "),a("p",[t._v("每名参与者得到两组有颜色的文字，第一组数据是字体内容和字体颜色一致，第二组数据是字体内容和字体颜色不一致。\n每名参与者对每组文字说出文字的颜色，并分别统计完成每组的时间。\n此次实验共记录25组数据（样本量），并汇总到Excel表格中。")]),t._v(" "),a("h2",{attrs:{id:"为啥选左尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥选左尾"}},[t._v("#")]),t._v(" 为啥选左尾")]),t._v(" "),a("p",[t._v("###零假设和备选假设\n假设第一组“一致”的均值为 u1 ,第二组“不一致”的均值为 u2\n零假设H0：人们的反应时间不会因为字体内容和字体颜色是否相同（u1 = u2 ，或者 u1-u2=0 ）\n备选假设H1：特鲁普效应确实存在。根据特鲁普效应的定义，颜色和文字不同的情况下，人们的完场测试的时间会变长（ u1 < u2 ）")]),t._v(" "),a("p",[t._v("###检验方向\n单尾检验（左尾，右尾），还是双尾检验？\n因为备选假设是：特鲁普效应确实存在，根据Stroop Effect的定义，颜色和文字不同的情况下，人们的完场测试的时间会变长（ u1 < u2 ）。\n所以我们使用单尾检验中的左尾检验，显著水平为5%，t检验的自由度df=n-1=25-1=24")]),t._v(" "),a("h2",{attrs:{id:"标准误差的计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准误差的计算"}},[t._v("#")]),t._v(" 标准误差的计算")]),t._v(" "),a("p",[t._v("相关样本t检验\n"),a("a",{attrs:{href:"https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.stats.sem.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准误差资料"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"scipy计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scipy计算"}},[t._v("#")]),t._v(" scipy计算")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用scipy计算标准误差")]),t._v("\nse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'差值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"相关样本t检验-效应量的计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关样本t检验-效应量的计算"}},[t._v("#")]),t._v(" 相关样本T检验 效应量的计算")]),t._v(" "),a("p",[a("strong",[t._v("Cohen's d = （样本平均值1-样本平均值2) / 标准差")]),t._v("\n样本平均值2:这里是与题目有关的，这里是0，零假设H0：人们的反应时间不会因为字体内容和字体颜色是否相同（u1 = u2 ，或者 u1-u2=0 ）")]),t._v(" "),a("p",[a("img",{attrs:{src:n(166),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" code")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一、描述统计分析")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#导入包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pd\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n路径和文件名中不要用中文，不然会报错\nencoding用于指定文件的编码，因为读取的csv中有中文，所以指定文件编码为中文编码“GBK”\n'''")]),t._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./斯特鲁普数据集.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GBK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#获取描述统计信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("describe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n第一组数据：字体内容和字体颜色一致情况下，实验者的反应时间\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#第一组数据均值")]),t._v("\ncon1_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一组数据标准差")]),t._v("\ncon1_std "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n第一组数据：字体内容和字体颜色一致情况下，实验者的反应时间\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二组数据均值")]),t._v("\ncon2_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'不一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二组数据标准差")]),t._v("\ncon2_std "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'不一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#两个样本数据集对比")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#画板")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fg = plt.figure(figsize = (20,10))")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# #画纸")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ax = fg.add_subplot(1,1,1)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# #绘制柱状图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# data.plot(kind = 'bar',ax = ax)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# #显示图形")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plt.show()")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 描述统计分析结果：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一组数据：字体内容和字体颜色一致情况下，实验者的平均反应时间是: 13.89044 秒,标准差是 3.47046489537 秒")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二组数据：字体内容和字体颜色不一致情况下，实验者的平均反应时间是: 22.62428 秒,标准差是 5.09183854745 秒")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# “不一致”情况下所用时间均大于“一致”情况，也就是当字体内容和字体验证不一致时，实验者的平均反应时间变长")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二、推论统计分析")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进行假设检验")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.问题是什么？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自变量是指原因。因变量是指结果，也就是自变量发生变化导致改变的值就是因变量。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自变量：我们有两组实验数据，第一组是字体内容和颜色一致。第二组数据值是字体内容和颜色不一致。所以自变量是实验数据的颜色和文字是否相同")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因变量：实验者的反应时间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以，我们要考察的是自变量（字体内容和颜色是否相同）两种情况下对因变量（反应时间）的影响。")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 零假设和备选假设")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设第一组“一致”的均值为 u1 ,第二组“不一致”的均值为 u2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 零假设H0：人们的反应时间不会因为字体内容和字体颜色是否相同（u1 = u2 ，或者 u1-u2=0 ）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 备选假设H1：特鲁普效应确实存在。根据特鲁普效应的定义，颜色和文字不同的情况下，人们的完场测试的时间会变长（ u1 < u2 ）")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检验类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检验类型有很多种，因为该使用两组数据是相关样本，所以选择相关配对检验。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相关配对检验只关注每对相关数据的差值，从而避免得到的结论受到参与人员间正常反应时间独立性的影响。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在只关注差值集的情况下，样本集处理后只有一组（差值集）。下面我们对样本数据进行处理，从而得到差值集。")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n获取差值数据集，也就是“一致”这一列数据，对应减去“不一致”这一列的数据\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#差值数据集")]),t._v("\ndata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'差值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'不一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们还要判断抽样分布是哪种？因为抽样分布的类型，决定了后面计算p值的不同。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在我们这个案例中，样本大小是25（小于30），属于小样本。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那小样本的抽样分布是否满足t分布呢？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为t分布还要求数据集近似正态分布，所以下面图片我们看下差值数据集的分布长什么样。")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n直方图能够粗略估计数据密度，如果想给数据一个更精确的拟合曲线（专业术语叫：核密度估计kernel density estimate (KDE)），\nSeaborn 可以很方便的画出直方图和拟合曲线。\n查看数据集分布官网教程地址：https://seaborn.pydata.org/tutorial/distributions.html\n\n需要先在navigator中安装绘图包（seaborn），\n如果还不知道如何安装包，可以看第1关的教程：https://www.zhihu.com/question/58033789/answer/254673663\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#导入绘图包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" seaborn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sns\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看数据集分布")]),t._v("\nsns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("distplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'差值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'差值数据集分布'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过观察上面差值数据集分布图，数据集近似正态分布，所以满足t分布的使用条件，我们可以使用相关样本t检验。")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检验方向")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单尾检验（左尾，右尾），还是双尾检验？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为备选假设是：特鲁普效应确实存在，根据Stroop Effect的定义，颜色和文字不同的情况下，人们的完场测试的时间会变长（ u1 < u2 ）。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以我们使用单尾检验中的左尾检验，显著水平为5%，t检验的自由度df=n-1=25-1=24")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.证据是什么？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在零假设成立前提下，得到样本平均值的概率p是多少？")]),t._v("\n\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n用python统计包scipy自动计算\n用scipy计算出的是：双尾检验\n单（1samp）样本t检验（ttest_1samp）：https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_1samp.html\n相关（related）配对t检验（ttest_rel）：https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_rel.html\n双独立（independent）样本t检验（ttest_ind）：https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#导入统计模块（stats）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scipy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" stats\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\nttest_rel：相关配对检验\n返回的第1个值t是假设检验计算出的（t值），\n第2个值p是双尾检验的p值\n'''")]),t._v("\nt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p_two "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ttest_rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'不一致'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t值='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'双尾检验的p值='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p_two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n因为scipy计算出的是双尾检验的t值和p值，但是我们这里是左尾检验。\n根据对称性，双尾的p值是对应单尾p值的2倍\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#单尾检验的p值")]),t._v("\np_one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("p_two"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'单尾检验的p值='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3.判断标准是什么？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显著水平使用alpha=5%")]),t._v("\nalpha"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.做出结论")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n左尾判断条件：t < 0 and  p_one < 判断标准（显著水平）alpha\n右尾判断条件：t > 0 and  p_one < 判断标准（显著水平）alpha\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#做出结论")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" p_one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" alpha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'拒绝零假设，有统计显著'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'也就是接受备选假设：特鲁普效应存在'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'接受备选假设，没有统计显著，也就是特鲁普效应不存在'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拒绝零假设，有统计显著")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也就是接受备选假设：特鲁普效应存在")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设检验报告：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相关配对检验t(24)=-8.35,p=7.32e-09 (α=5%),左尾检验")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计上存在显著差异，拒绝零假设，从而验证斯特鲁普效应存在。")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5. 置信区间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n1）置信水平对应的t值（t_ci）\n查t表格可以得到，95%的置信水平对应的t值=2.262\n2）计算上下限\n置信区间上限a=样本平均值 - t_ci ×标准误差\n置信区间下限b=样本平均值 - t_ci ×标准误差\n'''")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n95%的置信水平，自由度是n-1对应的t值\n查找t表格获取，\n也可以通过这个工具获取：https://www.graphpad.com/quickcalcs/statratio1/（利用这个工具获取t值，需要注意输入的概率值是1-95%=0.05）\n注意：课程中这里对应的下面t_ci值有误，以下面的值为准\n'''")]),t._v("\nt_ci"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.064")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#差值数据集平均值")]),t._v("\nsample_mean"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'差值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用scipy计算标准误差")]),t._v("\nse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'差值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#置信区间上限")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sample_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t_ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" se\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#置信区间下限")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sample_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" t_ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" se\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个平均值差值的置信区间，95置信水平 CI=[-8.800151,-8.667529]")]),t._v("\n\n\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6.效应量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n效应量：差异指标Cohen's d\n'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#差值数据集对应的总体平均值是0")]),t._v("\npop_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#差值数据集的标准差")]),t._v("\nsample_std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'差值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sample_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" pop_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" sample_std\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 三、数据分析报告总结")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、描述统计分析")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一组样本数据：字体内容和字体颜色一致情况下，平均反应时间是: 13.89 秒,标准差是 3.47 秒")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二组样本数据：字体内容和字体颜色不一致情况下，平均反应时间是: 22.62 秒,标准差是 5.09 秒")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# “不一致”情况下所用时间均大于“一致”情况，也就是当字体内容和字体验证不一致时，实验者的平均反应时间变长")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、推论统计分析")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1）假设检验")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相关配对检验t(24)=-8.35,p=7.32e-09 (α=5%),左尾检验")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计上存在显著差异，拒绝零假设，从而验证斯特鲁普效应存在。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2）置信区间")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个平均值差值的置信区间，95%置信水平 CI=-8.80,-8.67")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3）效应量")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# d= - 1.67")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);