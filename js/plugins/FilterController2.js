var newFilterName = "rgbsplit2";
Filter_Controller.filterNameMap[newFilterName]        = PIXI.filters.RGBSplitFilter;
Filter_Controller.defaultFilterParam[newFilterName]   = [1,-1,-1,0,0,1];
 
Filter_Controller.updateFilterHandler[newFilterName]  = function(filter, param) {
        filter.red   = [param[0], param[1]];
        filter.green = [param[2], param[3]];
        filter.blue  = [param[4], param[5]];
};